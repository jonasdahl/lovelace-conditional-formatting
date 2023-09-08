type CardMeta = {
  type: string;
  name: string;
  preview: boolean;
  description: string;
};

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    customCards?: any[];
  }
}

export function addCard(cardMeta: CardMeta, element: CustomElementConstructor) {
  customElements.define(cardMeta.type, element);
  window.customCards = window.customCards || [];
  window.customCards.push(cardMeta);
}
