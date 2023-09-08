import { ConfigItem } from "../../config";

export function CanvasItemSvg({
  item,
}: {
  item: ConfigItem & { type: "svg" };
}) {
  return (
    <div
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
      }}
    >
      <img src={item.source} />
    </div>
  );
}
