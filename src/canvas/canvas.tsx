import { ComponentChildren } from "preact";

export function Canvas({ children }: { children: ComponentChildren }) {
  return (
    <div
      style={{
        position: "relative",
        flex: 1,
        height: "100%",
        minHeight: "30vh",
        background: "#fb0",
      }}
    >
      {children}
    </div>
  );
}
