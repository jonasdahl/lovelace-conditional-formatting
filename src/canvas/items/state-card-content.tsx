import { ConfigItem } from "../../config";
import { useEntity } from "../../hooks/use-entity";
import { useHass } from "../../hooks/use-hass";

export function CanvasItemStateCardContent({
  item,
}: {
  item: ConfigItem & { type: "state-card-content" };
}) {
  const hass = useHass();
  const entity = useEntity(item.entityId);

  return (
    <div
      style={{
        position: "absolute",
        left: "10%",
        right: "10%",
        bottom: "10%",
      }}
    >
      <ha-card>
        <state-card-content hass={hass} stateObj={entity} />
      </ha-card>
    </div>
  );
}
