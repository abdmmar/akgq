import styled from 'styled-components'
import _Container from '../Common/Container'

const Epilog = () => {
  return (
    <Container>
      <Wrapper>
        <H2>Epilog</H2>
      </Wrapper>
    </Container>
  )
}

const Container = styled(_Container)`
  background-color: ${(props) => props.theme.colors.midnight};
  color: ${(props) => props.theme.colors.white};
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 52px;
`

const H2 = styled.h2`
  margin-bottom: 2rem;
  font-size: clamp(2rem, 16vw - 4rem, 4rem);
  color: ${(props) => props.theme.colors.white};
`

export default Epilog
