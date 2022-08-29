export type Colors = {
  midnight: string
  torchRed: string
  cream: string
  white: string
  black: string
  yogyaBlue: string
}

export type Color = keyof Colors

export interface Theme {
  colors: Colors
}
