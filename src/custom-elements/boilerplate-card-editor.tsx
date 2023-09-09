import { HomeAssistant } from "custom-card-helpers";
import { render } from "preact";
import { generateErrorMessage } from "zod-error";
import { configSchema } from "../config";
import { Editor } from "../editor";
import store from "../store";

export class BoilerplateCardEditor extends HTMLElement {
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

  private _render = () => {
    render(<Editor />, this);
  };

  getCardSize() {
    return 1;
  }
}
