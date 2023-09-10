import { HomeAssistant } from "custom-card-helpers";
import { getValueFromExpression } from "../helpers/get-value-from-expression";
import { numericOrNull } from "../helpers/numeric-or-null";
import { Rule, RuleResult } from "./types";

export function evaluateAnyValueRule(
  rule: Rule & { type: "any-value" },
  meta: { hass: HomeAssistant }
): RuleResult {
  const value = getValueFromExpression(rule.expression, meta);
  if (value === undefined) {
    return { success: false };
  }

  const numericValue = numericOrNull(value);

  if (
    rule.greaterThan !== undefined &&
    (numericValue === null || numericValue <= rule.greaterThan)
  ) {
    return { success: false };
  }

  if (
    rule.lessThan !== undefined &&
    (numericValue === null || numericValue >= rule.lessThan)
  ) {
    return { success: false };
  }

  return { success: true, data: rule.value };
}
