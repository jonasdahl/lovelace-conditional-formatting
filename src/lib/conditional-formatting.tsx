import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { useMemo } from "preact/hooks";
import { Config } from "../config";
import { useConfig } from "./hooks/use-config";
import { useHass } from "./hooks/use-hass";
import { evaluateRules } from "./rules";

export function ConditionalFormatting() {
  const config = useConfig();
  const client = useMemo(() => {
    return new QueryClient();
  }, []);

  if (!config) {
    return null;
  }

  return (
    <QueryClientProvider client={client}>
      <Content config={config} />
    </QueryClientProvider>
  );
}

export function Content({ config }: { config: Config }) {
  const { data } = useQuery({
    queryKey: ["svg", config.source],
    queryFn: async () => {
      return fetch(config.source).then((res) => res.text());
    },
  });

  const id = useMemo(
    () => `conditional-formatting-${Math.random().toString(36).slice(2, 9)}`,
    []
  );
  const hass = useHass();

  const variables = config.conditionalFormatting.map((formattingItem) => {
    const value = hass
      ? evaluateRules(formattingItem.rules, { hass })
      : undefined;
    return { variableName: formattingItem.variableName, value };
  });

  const cssString = `#${id} { ${variables
    .map(({ value, variableName }) => `${variableName}: ${value};`)
    .join("\n")} }`;

  if (!data) {
    return null;
  }

  return (
    <div id={id}>
      <style dangerouslySetInnerHTML={{ __html: cssString }} />
      <div dangerouslySetInnerHTML={{ __html: data }} />
    </div>
  );
}
