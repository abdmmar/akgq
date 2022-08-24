import styled from 'styled-components'

const Main = styled.main`
  min-height: 100vh;
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Footer = styled.footer`
  display: flex;
  flex: 1;
  padding: 2rem 0;
  border-top: 1px solid #eaeaea;
  justify-content: center;
  align-items: center;
`

const ComingSoon = () => {
  return (
    <div>
      <Main>Test</Main>

      <Footer></Footer>
    </div>
  )
}

export default ComingSoon
