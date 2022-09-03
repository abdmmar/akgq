import Link from 'next/link'
import styled from 'styled-components'
import { colors } from 'styles/theme'
import _Container from '../Common/Container'
import Text from '../Common/Text'

const CeritaDongKack = () => {
  return (
    <Container>
      <Wrapper>
        <div>
          <H2>Cerita dong, kack!</H2>
          <p>Kolom curhat dari mereka yang nggak berangkat</p>
        </div>
        <Content>
          <CeritaDongWrapper>
            <CeritaDongContent>
              <Text
                as="h3"
                size="clamp(1.5rem, 16vw - 2rem, 2rem)"
                weight="700"
                lineHeight="94.52%"
                color="cream"
                margin="0"
              >
                Dari: Dil
              </Text>
              <Text>Mahasiswa Turki Semester Akhir yang Bucin Nggak Ketolong</Text>
            </CeritaDongContent>
            <Link href="/cerita-dong/dil">
              <a>
                <CircleButton bgColor={colors.cream} textColor={colors.torchRed}>
                  <Text weight="700" color="torchRed" margin="0" size="14px">
                    Read More
                  </Text>
                </CircleButton>
              </a>
            </Link>
          </CeritaDongWrapper>
          <CeritaDongWrapper>
            <CeritaDongContent>
              <Text
                as="h3"
                size="clamp(1.5rem, 16vw - 2rem, 2rem)"
                weight="700"
                lineHeight="94.52%"
                color="torchRed"
                margin="0"
              >
                Dari: Anonim Asal P**de****g
              </Text>
              <Text>Korban PHP Dosbing :&apos;(</Text>
            </CeritaDongContent>
            <Link href="/cerita-dong/anonim">
              <a>
                <CircleButton bgColor={colors.yogyaBlue} textColor={colors.cream}>
                  <Text weight="700" color="cream" margin="0" size="14px">
                    Read More
                  </Text>
                </CircleButton>
              </a>
            </Link>
          </CeritaDongWrapper>
        </Content>
      </Wrapper>
    </Container>
  )
}

const Container = styled(_Container)`
  min-height: unset;
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
  flex-wrap: wrap;
  gap: 3rem;
`

const H2 = styled.h2`
  font-size: clamp(2rem, 16vw - 3rem, 3rem);
  color: ${(props) => props.theme.colors.white};
`

const CeritaDongWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 360px;
  min-height: 230px;
`

const CeritaDongContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
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

export default CeritaDongKack
