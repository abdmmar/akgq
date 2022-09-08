import styled from 'styled-components'

import { colors } from 'styles/theme'
import { Color } from 'styles/theme.types'
import _Container from 'components/Common/Container'

interface Props {
  color?: Color
}

const Loading = ({ color }: Props) => {
  return (
    <Container>
      <Wrapper>
        <svg
          version="1.1"
          id="L9"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 100 100"
          enableBackground="new 0 0 0 0"
        >
          <path
            fill={color || colors.midnight}
            d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
          >
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              dur="1s"
              from="0 50 50"
              to="360 50 50"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      </Wrapper>
    </Container>
  )
}

const Container = styled(_Container)`
  min-height: unset;
  padding: 20px;
  max-width: 100vw;
  justify-content: center;
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
`

export default Loading
