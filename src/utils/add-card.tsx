type CardMeta = {
  type: string;
  name: string;
  preview: boolean;
  description: string;
};

declare global {
  interface Window {
    customCards?: unknown[];
  }
}

export function defineCustomCard(cardMeta: CardMeta) {
  window.customCards = window.customCards || [];
  window.customCards.push(cardMeta);
}
