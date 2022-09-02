import styled from 'styled-components'
import NextImage from 'next/image'
import Container from '../Common/Container'
import Link from 'next/link'
import Text from 'components/Common/Text'
import { useWindowSize } from 'hooks/useWindowSize'

const BehindTheScene = () => {
  const size = useWindowSize()

  return (
    <Container>
      <Wrapper>
        <Content>
          <div>
            <Text color="yogyaBlue">Oleh: Nadia Tahani</Text>
            <Link href="/bts">
              <a>
                <H2>Behind {size?.width && size.width > 425 ? <br /> : null} The Scene</H2>
              </a>
            </Link>
            <Text color="yogyaBlue">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam,
            </Text>
          </div>
          <Link href="/bts">
            <a>
              <Button>Read More</Button>
            </a>
          </Link>
        </Content>
        <NextImage
          src="/images/akgq-peace.jpg"
          width={470}
          height={700}
          objectFit="cover"
          loading="lazy"
          alt="Illustration about Tugu Jogja"
        />
      </Wrapper>
    </Container>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap-reverse;
  gap: 52px;

  @media screen and (max-width: 425px) {
    gap: 1rem;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const H2 = styled.h2`
  font-size: clamp(2rem, 16vw - 7rem, 7rem);
  line-height: 0.9;
  margin-bottom: 1.25rem;
  color: ${(props) => props.theme.colors.midnight};
  letter-spacing: -0.035em;
`

const Button = styled.div`
  border: 0;
  width: fit-content;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.torchRed};
  color: ${(props) => props.theme.colors.cream};
  font-weight: 600;
  cursor: pointer;
  transition: box-shadow 200ms;

  &:hover {
    box-shadow: 5px 5px 0 ${(props) => props.theme.colors.midnight};
  }
`

export default BehindTheScene
