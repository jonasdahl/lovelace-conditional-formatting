import { z } from "zod";

const conditionalFormattingSchema = z.object({
  variableName: z.string(),
  rules: z.array(
    z.union([
      z.object({
        type: z.literal("any-value"),
        expression: z.string(),
        greaterThan: z.number().optional(),
        lessThan: z.number().optional(),
        value: z.string(),
      }),
      z.object({
        type: z.literal("color-gradient"),
        expression: z.string(),
        scale: z.array(
          z.object({
            stateValue: z.number(),
            color: z.string(),
          })
        ),
      }),
    ])
  ),
});

export const configSchema = z.object({
  type: z.literal("custom:conditional-formatting"),
  source: z.string(),
  conditionalFormatting: z.array(conditionalFormattingSchema),
});

export type Config = z.infer<typeof configSchema>;
