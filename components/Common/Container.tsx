import styled from 'styled-components'

const Container = styled.div`
  min-height: 100vh;
  padding: 100px 150px;
  display: flex;
  align-items: center;

  @media screen and (max-width: 1024px) {
    padding: 50px 100px;
  }

  @media screen and (max-width: 768px) {
    padding: 50px 50px;
  }

  @media screen and (max-width: 425px) {
    padding: 20px;
  }
`

export default Container
