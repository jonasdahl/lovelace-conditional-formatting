import { render } from "preact";
import { useState } from "preact/hooks";

render(<App />, document.getElementById("root")!);

function App() {
  const [clicks, setClicks] = useState(0);
  return (
    <>
      Welcome to Preact. Clicks: {clicks}.{" "}
      <button onClick={() => setClicks((old) => old + 1)}>Increase</button>
    </>
  );
}
