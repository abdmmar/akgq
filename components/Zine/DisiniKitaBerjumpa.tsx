import Link from 'next/link'
import Masonry from 'react-masonry-css'
import styled from 'styled-components'
import { colors } from 'styles/theme'
import _Container from '../Common/Container'
import Text from '../Common/Text'

const breakpointColumns = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
}

const DisiniKitaBerjumpa = () => {
  return (
    <Container>
      <Wrapper>
        <div>
          <H2>Disini Kita Berjumpa</H2>
          <p>Ada kejadian apa aja sih di reuni kemaren?</p>
        </div>
        <Content>
          <ContentWrapper>
            <CerpenContainer>
              <Link href="/dkb/cerpen-refa">
                <a>
                  <CerpenContent>
                    <Text
                      as="h3"
                      size="clamp(1.5rem, 16vw - 2rem, 2rem)"
                      weight="700"
                      lineHeight="94.52%"
                      color="torchRed"
                      margin="0"
                    >
                      Reuni: Semburat rindu yang terbit, menyongsong masa depan cerah
                    </Text>
                    <Text>Oleh: Refa Triana</Text>
                  </CerpenContent>
                </a>
              </Link>
            </CerpenContainer>
            <CerpenContainer>
              <Link href="/dkb/cerpen-adib">
                <a>
                  <CerpenContent>
                    <Text
                      as="h3"
                      size="clamp(1.5rem, 16vw - 2rem, 2rem)"
                      weight="700"
                      lineHeight="94.52%"
                      color="torchRed"
                      margin="0"
                    >
                      Arya Sang Manajer
                    </Text>
                    <Text>Oleh: Adib Surya</Text>
                  </CerpenContent>
                </a>
              </Link>
            </CerpenContainer>
          </ContentWrapper>
          <div>
            <Masonry
              breakpointCols={breakpointColumns}
              className="dkb-masonry-grid"
              columnClassName="dkb-masonry-grid-column"
            ></Masonry>
          </div>
        </Content>
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
  flex-direction: column;
  gap: 52px;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 3rem;
`

const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
`

const H2 = styled.h2`
  font-size: clamp(2rem, 16vw - 3rem, 3rem);
  color: ${(props) => props.theme.colors.white};
`

const CerpenContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 360px;
  min-height: 230px;
`

const CerpenContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  background-color: ${(props) => props.theme.colors.cream};
  box-shadow: 10px 10px 0px ${(props) => props.theme.colors.yogyaBlue};
`

const CircleButton = styled.button<{ bgColor?: string; textColor?: string }>`
  border: none;
  cursor: pointer;
  border-radius: 50%;
  background-color: ${(props) => (props.bgColor ? props.bgColor : props.theme.colors.white)};
  color: ${(props) => (props.textColor ? props.textColor : props.theme.colors.midnight)};
  height: 86px;
  width: 86px;
  transition: all 100ms;

  &:hover {
    p {
      color: ${(props) => (props.bgColor ? props.bgColor : props.theme.colors.white)};
    }
    background-color: ${(props) =>
      props.textColor ? props.textColor : props.theme.colors.midnight};
  }
`

export default DisiniKitaBerjumpa
