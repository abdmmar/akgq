import { Theme } from './theme.types'

export const colors = {
  midnight: '#001934',
  torchRed: '#FC2C3A',
  cream: '#FEF7C1',
  white: '#FFFFFF',
  black: '#000000',
  yogyaBlue: '#2C8DA3',
}

export const lightTheme: Theme = {
  colors,
}

export const darkTheme: Theme = {
  colors,
}

export const getTheme = (name: 'light' | 'dark' = 'light'): Theme => {
  switch (name) {
    case 'light':
      return lightTheme
    case 'dark':
      return darkTheme
  }
}
