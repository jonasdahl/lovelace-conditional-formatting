import createColormap from "colormap";
import { HomeAssistant } from "custom-card-helpers";
import parseColor from "parse-color";
import { getValueFromExpression } from "../helpers/get-value-from-expression";
import { numericOrNull } from "../helpers/numeric-or-null";
import { Rule, RuleResult } from "./types";

export function evaluateColorGradientRule(
  rule: Rule & { type: "color-gradient" },
  meta: { hass: HomeAssistant }
): RuleResult {
  const value = getValueFromExpression(rule.expression, meta);
  if (value === undefined) {
    return { success: false };
  }

  const numericValue = numericOrNull(value);
  if (numericValue === null) {
    return { success: false };
  }

  const setPoints = rule.scale.map((i) => Number(i.stateValue));
  const minSetPoint = Math.min(...setPoints);
  const maxSetPoint = Math.max(...setPoints);

  if (isNaN(minSetPoint) || isNaN(maxSetPoint)) {
    return { success: false };
  }

  try {
    const map = createColormap({
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
      data: typeof color === "string" ? color : `rgba(${color.join(",")})`,
    };
  } catch {
    return { success: false };
  }
}
