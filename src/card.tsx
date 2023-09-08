import { HomeAssistant } from "custom-card-helpers";
import { Root, createRoot } from "react-dom/client";
import retargetEvents from "react-shadow-dom-retarget-events";
import { create } from "zustand";
import { Card } from "./components/card";
import { Config } from "./types";

interface Store {
  hass?: HomeAssistant;
  config?: Config;
}

export class BoilerplateCard extends HTMLElement {
  private root: Root | undefined;
  private store = create<Store>(() => ({}));

  set hass(_hass: HomeAssistant | undefined) {
    this._render();
  }

  setConfig(_config: any) {
    this._render();
  }

  connectedCallback() {
    console.log("Connected...");
    if (this.root) {
      throw new Error("React has already mounted");
    }
    const mountPoint = document.createElement("span");
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(mountPoint);
    this.root = createRoot(mountPoint);
    this.root.render(<Card />);
    retargetEvents(shadowRoot);
  }

  disconnectedCallback() {
    console.log("Disconnected...");
    if (!this.root) {
      throw new Error("React has not mounted");
    }
    this.root.unmount();
    this.root = undefined;
  }

  private _render = () => {
    //    this.innerHTML = `<img src="http://localhost:3000/build/_assets/image-GU2XEEC4.svg" />`;
  };

  getCardSize() {
    return 1;
  }
}
