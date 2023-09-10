import { HomeAssistant } from "custom-card-helpers";
import { evaluateAnyValueRule } from "./any-value";
import { evaluateColorGradientRule } from "./color-gradient";
import { Rule, RuleResult } from "./types";

export function evaluateRules(rules: Rule[], meta: { hass: HomeAssistant }) {
  for (const rule of rules) {
    const result = evaluateRule(rule, meta);
    if (result.success) {
      return result.data;
    }
  }
  return null;
}

function evaluateRule(rule: Rule, meta: { hass: HomeAssistant }): RuleResult {
  switch (rule.type) {
    case "any-value":
      return evaluateAnyValueRule(rule, meta);
    case "color-gradient":
      return evaluateColorGradientRule(rule, meta);
  }
}
