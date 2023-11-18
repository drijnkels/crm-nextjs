export type FlashVariant = 'positive' | 'negative' | 'alert';

export type FlashMessage = {
  label: string,
  state: FlashVariant
}