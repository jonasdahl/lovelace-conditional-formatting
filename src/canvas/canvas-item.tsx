import { ConfigItem } from "../config";
import { CanvasItemStateCardContent } from "./items/state-card-content";
import { CanvasItemStateLabelBadge } from "./items/state-label-badge";
import { CanvasItemSvg } from "./items/svg";

export function CanvasItem({ item }: { item: ConfigItem }) {
  switch (item.type) {
    case "svg": {
      return <CanvasItemSvg item={item} />;
    }
    case "state-card-content": {
      return <CanvasItemStateCardContent item={item} />;
    }
    case "state-label-badge": {
      return <CanvasItemStateLabelBadge item={item} />;
    }
  }
}
