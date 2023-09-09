import { useQuery } from "@tanstack/react-query";
import colormap from "colormap";
import { HomeAssistant } from "custom-card-helpers";
import parseColor from "parse-color";
import { useId } from "preact/hooks";
import { pathOr, stringToPath } from "remeda";
import { ConfigItem } from "../../config";
import { useHass } from "../../hooks/use-hass";

type Rule = (ConfigItem & {
  type: "svg";
})["conditionalFormatting"][number]["rules"][number];

function evaluateRules(rules: Rule[], meta: { hass: HomeAssistant }) {
  for (const rule of rules) {
    const result = evaluateRule(rule, meta);
    if (result.success) {
      return result.data;
    }
  }
  return null;
}

type RuleResult = { success: true; data: string } | { success: false };

function evaluateRule(rule: Rule, meta: { hass: HomeAssistant }): RuleResult {
  switch (rule.type) {
    case "any-value":
      return evaluateAnyValueRule(rule, meta);
    case "color-gradient":
      return evaluateColorGradientRule(rule, meta);
  }
}

function evaluateColorGradientRule(
  rule: Rule & { type: "color-gradient" },
  meta: { hass: HomeAssistant }
): RuleResult {
  const path = stringToPath(rule.expression);
  const value = pathOr(path, undefined as any)(meta.hass);
  if (value === undefined) {
    return { success: false };
  }
  const numericValue = Number(value);
  if (isNaN(numericValue)) {
    return { success: false };
  }
  const setPoints = rule.scale.map((i) => Number(i.stateValue));
  const minSetPoint = Math.min(...setPoints);
  const maxSetPoint = Math.max(...setPoints);

  if (isNaN(minSetPoint) || isNaN(maxSetPoint)) {
    return { success: false };
  }

  try {
    const map = colormap({
      colormap: rule.scale.map((item) => ({
        index:
          (Number(item.stateValue) - minSetPoint) / (maxSetPoint - minSetPoint),
        rgb: parseColor(item.color).rgba,
      })),
      nshades: 100,
    });

    const valueIndex = Math.ceil(
      ((numericValue - minSetPoint) / (maxSetPoint - minSetPoint)) *
        (map.length - 1)
    );
    const color =
      valueIndex < 0
        ? map[0]
        : valueIndex >= map.length
        ? map[map.length - 1]
        : map[valueIndex];

    return {
      success: true,
      data: typeof color === "string" ? color : `rgba(${value.join(",")})`,
    };
  } catch {
    return { success: false };
  }
}

function evaluateAnyValueRule(
  rule: Rule & { type: "any-value" },
  meta: { hass: HomeAssistant }
): RuleResult {
  const path = stringToPath(rule.expression);
  const value = pathOr(path, undefined as any)(meta.hass);
  if (value === undefined) {
    return { success: false };
  }
  if (rule.greaterThan !== undefined && Number(value) <= rule.greaterThan) {
    return { success: false };
  }
  if (rule.lessThan !== undefined && Number(value) >= rule.lessThan) {
    return { success: false };
  }
  return { success: true, data: rule.value };
}

export function CanvasItemSvg({
  item,
}: {
  item: ConfigItem & { type: "svg" };
}) {
  const { data } = useQuery({
    queryKey: ["svg", item.source],
    queryFn: async () => {
      return fetch(item.source).then((res) => res.text());
    },
  });

  const id = useId();
  const hass = useHass();

  const variables = item.conditionalFormatting.map((formattingItem) => {
    const value = hass
      ? evaluateRules(formattingItem.rules, { hass })
      : undefined;
    return { variableName: formattingItem.variableName, value };
  });

  if (!data) {
    return null;
  }

  return (
    <div
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
      }}
      id={id}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `#${id} { ${variables
            .map(({ value, variableName }) => `${variableName}: ${value};`)
            .join("\n")} }`,
        }}
      />
      <div dangerouslySetInnerHTML={{ __html: data }} />
    </div>
  );
}
