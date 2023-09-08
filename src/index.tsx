import { BoilerplateCard } from "./custom-elements/boilerplate-card";
import { BoilerplateCardEditor } from "./custom-elements/boilerplate-card-editor";
import { addCard } from "./utils/add-card";

addCard(
  {
    type: "boilerplate-card",
    name: "Boilerplate Card",
    preview: true,
    description: "Boilerplate Card x React",
  },
  BoilerplateCard
);

addCard(
  {
    type: "boilerplate-card-editor",
    name: "",
    preview: true,
    description: "Boilerplate Card x React",
  },
  BoilerplateCardEditor
);
