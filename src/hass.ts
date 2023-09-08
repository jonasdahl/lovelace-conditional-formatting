import { BoilerplateCard } from "./card";

customElements.define("boilerplate-card", BoilerplateCard);

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    customCards?: any[];
  }
}

window.customCards = window.customCards || [];
window.customCards.push({
  type: "boilerplate-card",
  name: "Boilerplate Card",
  preview: false,
  description: "Boilerplate Card x React",
});
