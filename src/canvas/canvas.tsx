import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ComponentChildren } from "preact";

const queryClient = new QueryClient();

export function Canvas({ children }: { children: ComponentChildren }) {
  return (
    <QueryClientProvider client={queryClient}>
      <div
        style={{
          position: "relative",
          flex: 1,
          height: "100%",
          minHeight: "30vh",
        }}
      >
        {children}
      </div>
    </QueryClientProvider>
  );
}
