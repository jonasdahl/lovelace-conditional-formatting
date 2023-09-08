import RefreshRuntime from "http://localhost:5173/@react-refresh";
import "vite/modulepreload-polyfill";
RefreshRuntime.injectIntoGlobalHook(window);
window.$RefreshReg$ = () => {};
window.$RefreshSig$ = () => (type) => type;
window.__vite_plugin_react_preamble_installed__ = true;

const viteScript = document.createElement("script");
viteScript.type = "module";
viteScript.src = "http://localhost:5173/@vite/client";
document.head.appendChild(viteScript);

const main = document.createElement("script");
main.type = "module";
main.src = "http://localhost:5173/src/hass.ts";
document.head.appendChild(main);
