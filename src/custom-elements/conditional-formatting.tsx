import { HomeAssistant } from "custom-card-helpers";
import { render } from "preact";
import { generateErrorMessage } from "zod-error";
import { Config, configSchema } from "../config";
import { ConditionalFormatting as ConditionalFormattingComponent } from "../lib/conditional-formatting";
import store from "../store";

export class ConditionalFormatting extends HTMLElement {
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

  static getStubConfig(): Config {
    return {
      type: "custom:conditional-formatting",
      conditionalFormatting: [],
      source: "",
    };
  }

  private _render = () => {
    render(<ConditionalFormattingComponent />, this);
  };

  getCardSize() {
    return 4;
  }
}
