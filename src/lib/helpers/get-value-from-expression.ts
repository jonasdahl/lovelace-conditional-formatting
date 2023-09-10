import { HomeAssistant } from "custom-card-helpers";
import { pathOr, stringToPath } from "remeda";

export function getValueFromExpression(
  expression: string,
  meta: { hass: HomeAssistant }
) {
  const path = stringToPath(expression);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const value = (pathOr as any)(meta.hass, path, undefined);

  if (value === undefined) {
    return null;
  }
  return value as unknown;
}
