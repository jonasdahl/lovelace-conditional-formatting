import { useConfig } from "../hooks/use-config";
import { Canvas } from "./canvas";
import { CanvasItem } from "./canvas-item";

export function Editor() {
  const { items } = useConfig();
  return (
    <div style={{ pointerEvents: "none" }}>
      <Canvas>
        {items.map((item, i) => (
          <CanvasItem key={i} item={item} />
        ))}
        <div style={{ position: "absolute", top: 0, left: 0 }}>
          <button>Delete everything</button>
        </div>
      </Canvas>
    </div>
  );
}
