import { useEffect, useRef } from "preact/hooks";
import { ConfigItem } from "../../config";
import { useEntity } from "../../hooks/use-entity";
import { useHass } from "../../hooks/use-hass";

export function CanvasItemStateLabelBadge({
  item,
}: {
  item: ConfigItem & { type: "state-label-badge" };
}) {
  const hass = useHass();
  const entity = useEntity(item.entityId);
  const ref = useRef(null);

  useEffect(() => {
    ref.current?.setConfig({ entity: item.entityId || "" });
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        left: "200px",
        top: "200px",
        width: "200px",
        height: "100px",
        background: "red",
      }}
    >
      <hui-entity-card ref={ref} hass={hass} />
    </div>
  );
}
