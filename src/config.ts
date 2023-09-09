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

const configItemSvgSchema = z.object({
  type: z.literal("svg"),
  source: z.string(),
  conditionalFormatting: z.array(conditionalFormattingSchema),
});
const configItemStateCardContentSchema = z.object({
  type: z.literal("state-card-content"),
  entityId: z.string(),
});
const configItemStateLabelBadgeSchema = z.object({
  type: z.literal("state-label-badge"),
  entityId: z.string(),
});

const itemSchema = z.union([
  configItemSvgSchema,
  configItemStateCardContentSchema,
  configItemStateLabelBadgeSchema,
]);

export const configSchema = z.object({
  type: z.literal("custom:boilerplate-card"),
  items: z.array(itemSchema),
});

export type Config = z.infer<typeof configSchema>;

export type ConfigItem = z.infer<typeof itemSchema>;
