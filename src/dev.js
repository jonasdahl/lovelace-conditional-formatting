// Entrypoint from hass for dev

import "vite/modulepreload-polyfill";

const viteScript = document.createElement("script");
viteScript.type = "module";
viteScript.src = "http://localhost:5173/@vite/client";
document.head.appendChild(viteScript);

const main = document.createElement("script");
main.type = "module";
main.src = "http://localhost:5173/src/index.ts";
document.head.appendChild(main);
