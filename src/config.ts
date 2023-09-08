import { z } from "zod";

const configItemSvgSchema = z.object({
  type: z.literal("svg"),
  source: z.string(),
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
