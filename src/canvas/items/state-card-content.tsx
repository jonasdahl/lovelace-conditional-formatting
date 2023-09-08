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
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
      }}
    >
      <ha-card>
        <h1 class="card-header">Rubrik</h1>
        <state-card-content hass={hass} stateObj={entity} />
      </ha-card>
    </div>
  );
}
