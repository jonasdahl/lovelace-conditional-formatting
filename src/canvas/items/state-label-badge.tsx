import { useEffect, useRef } from "preact/hooks";
import { ConfigItem } from "../../config";
import { useHass } from "../../hooks/use-hass";

export function CanvasItemStateLabelBadge({
  item,
}: {
  item: ConfigItem & { type: "state-label-badge" };
}) {
  const hass = useHass();
  const ref = useRef(null);

  useEffect(() => {
    ref.current?.setConfig({ entity: item.entityId || "" });
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        left: "10%",
        top: "10%",
        width: "50%",
        height: "10%",
        background: "red",
      }}
    >
      <hui-entity-card ref={ref} hass={hass} />
    </div>
  );
}
