import styled, { useTheme } from 'styled-components'
import NextImage from 'next/image'

import Container from '../Common/Container'
import Text from 'components/Common/Text'
import { useWindowSize } from 'hooks/useWindowSize'

const Cover = () => {
  const theme = useTheme()
  const size = useWindowSize()

  return (
    <Container>
      <Wrapper>
        {size?.width && size.width <= 500 ? (
          <div>
            <NextImage
              src="/akgq.svg"
              width={48}
              height={66}
              alt="Akyas and GenQ Temporary Logo"
              loading="lazy"
            />
          </div>
        ) : null}
        <NextImage
          src="/images/cover.jpeg"
          width={545}
          height={640}
          objectFit="cover"
          loading="lazy"
          alt="Illustration about Tugu Jogja"
        />
        <Content>
          {size?.width && size.width > 500 ? (
            <div>
              <NextImage
                src="/akgq.svg"
                width={48}
                height={66}
                alt="Akyas and GenQ Temporary Logo"
                loading="lazy"
              />
            </div>
          ) : null}
          <div>
            <Text color="yogyaBlue" margin="0">
              <strong>Special Edition:</strong>
            </Text>
            <H1>Reunion</H1>
            <Text color="yogyaBlue">
              Take a scroll down memory lane... <br />
              Tell us which moments you loved the most.
            </Text>
          </div>
          <ArrowBottom>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={32}
              height={32}
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 16 16"
              style={{
                transform: 'rotate(360deg)',
              }}
            >
              <path
                fill={theme.colors.yogyaBlue}
                fillRule="evenodd"
                d="m3.147 9l5 5h.707l5-5l-.707-.707L9 12.439V2H8v10.44L3.854 8.292L3.147 9z"
                clipRule="evenodd"
              />
            </svg>
          </ArrowBottom>
        </Content>
      </Wrapper>
    </Container>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 52px;

  @media screen and (max-width: 500px) {
    flex-direction: column;
    gap: 1rem;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-block: 24px;

  @media screen and (max-width: 500px) {
    padding: 0;
  }
`

const H1 = styled.h1`
  font-size: clamp(3rem, 16vw - 6rem, 6rem);
  color: ${(props) => props.theme.colors.midnight};
`

const ArrowBottom = styled.div`
  margin-top: 3rem;
`

export default Cover
