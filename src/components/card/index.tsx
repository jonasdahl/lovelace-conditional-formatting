import { useEffect, useState } from "react";

export function Card() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("tick");
      setCount((i) => i + 1);
    }, 500);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <>Count: -{count}</>;
}
