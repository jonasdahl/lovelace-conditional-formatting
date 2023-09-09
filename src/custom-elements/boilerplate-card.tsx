import { HomeAssistant } from "custom-card-helpers";
import { render } from "preact";
import { generateErrorMessage } from "zod-error";
import { Card } from "../card";
import { Config, configSchema } from "../config";
import store from "../store";

export class BoilerplateCard extends HTMLElement {
  set hass(hass: HomeAssistant | undefined) {
    store.setState({ hass });
    this._render();
  }

  setConfig(config: unknown) {
    const result = configSchema.safeParse(config);
    if (!result.success) {
      console.error(result.error);
      const errorMessage = generateErrorMessage(result.error.issues);
      throw new Error(errorMessage);
    } else {
      store.setState({ config: result.data });
    }
    this._render();
  }

  static getConfigElement() {
    return document.createElement("boilerplate-card-editor");
  }

  static getStubConfig(): Config {
    return { type: "custom:boilerplate-card", items: [] };
  }

  private _render = () => {
    render(<Card />, this);
  };

  getCardSize() {
    return 1;
  }
}
