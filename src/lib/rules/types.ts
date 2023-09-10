import { Config } from "../../config";

export type Rule = Config["conditionalFormatting"][number]["rules"][number];
export type RuleResult = { success: true; data: string } | { success: false };
