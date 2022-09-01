import styled, { useTheme } from 'styled-components'
import NextImage from 'next/image'

import Container from '../Common/Container'

const Cover = () => {
  const theme = useTheme()

  return (
    <Container>
      <Wrapper>
        <NextImage
          src="/images/cover.jpeg"
          width={545}
          height={640}
          objectFit="cover"
          loading="lazy"
          alt="Illustration about Tugu Jogja"
        />
        <Content>
          <div>
            <NextImage
              src="/akgq.svg"
              width={48}
              height={66}
              alt="Akyas and GenQ Temporary Logo"
              loading="lazy"
            />
          </div>
          <div>
            <CopyText>
              <strong>Special Edition:</strong>
            </CopyText>
            <H1>Reunion</H1>
            <CopyText>
              Take a scroll down memory lane... <br />
              Tell us which moments you loved the most.
            </CopyText>
          </div>
          <div>
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
          </div>
        </Content>
      </Wrapper>
    </Container>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 52px;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-block: 24px;
`

const H1 = styled.h1`
  font-size: clamp(3rem, 16vw - 6rem, 6rem);
  color: ${(props) => props.theme.colors.midnight};
`

const CopyText = styled.p`
  color: ${(props) => props.theme.colors.yogyaBlue};
`

export default Cover
