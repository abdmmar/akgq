import styled from 'styled-components'

const Main = styled.main`
  min-height: 100vh;
  padding: 2rem;
  background-color: #e9e5dc;
`

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 64px);
`

const H1 = styled.h1`
  font-size: clamp(2rem, 16vw - 5rem, 5rem);
`

const ComingSoon = () => {
  return (
    <div>
      <Main>
        <Container>
          <H1>Coming Soon</H1>
          <p>
            <strong>Akyas x GenQ</strong> Special Edition: Reunion
          </p>
        </Container>
      </Main>
    </div>
  )
}

export default ComingSoon
