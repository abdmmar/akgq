import styled from 'styled-components'
import { colors } from 'styles/theme'
import { Color } from 'styles/theme.types'

const Text = styled.p<{
  color?: Color
  maxWidth?: string
  margin?: string
  size?: string
  weight?: string
  lineHeight?: string
  opacity?: string | number
}>`
  margin: ${(props) => props.margin || '0px 0px 1rem 0px'};
  max-width: ${(props) => props.maxWidth || '60ch'};
  color: ${(props) => (props.color ? colors[props.color] : props.theme.colors.white)};
  font-size: ${(props) => props.size || '1rem'};
  font-weight: ${(props) => props.weight || 500};
  line-height: ${(props) => props.lineHeight || 1.5};
  opacity: ${(props) => props.opacity || 1};
`

export default Text
