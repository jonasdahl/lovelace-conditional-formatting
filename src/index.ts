import { version } from "../package.json";
import { ConditionalFormatting } from "./custom-elements/conditional-formatting";
import { defineCustomCard } from "./utils/add-card";

customElements.define("conditional-formatting", ConditionalFormatting);

defineCustomCard({
  type: "conditional-formatting",
  name: "Conditional formatting",
  preview: true,
  description: "Conditonally set CSS styles for child elements",
});

console.info(
  `%clovelace-conditional-formatting ${version} is installed`,
  "color: green; font-weight: bold",
  ""
);
