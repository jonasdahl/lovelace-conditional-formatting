import { useConfig } from "../hooks/use-config";
import { Canvas } from "./canvas";
import { CanvasItem } from "./canvas-item";

export function Editor() {
  const { items } = useConfig();
  return (
    <Canvas>
      {items.map((item, i) => (
        <CanvasItem key={i} item={item} />
      ))}
    </Canvas>
  );
}
