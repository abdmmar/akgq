import styled, { useTheme } from 'styled-components'
import NextImage from 'next/image'

const Cover = () => {
  const theme = useTheme()

  return (
    <Container>
      <Wrapper>
        <NextImage
          src="/cover.jpeg"
          width={545}
          height={640}
          objectFit="cover"
          alt="Illustration about Tugu Jogja"
        />
        <Content>
          <div>
            <NextImage src="/akgq.svg" width={48} height={66} alt="Akyas and GenQ Temporary Logo" />
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
              className="icon icon-tabler icon-tabler-arrow-down"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke={theme.colors.yogyaBlue}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="18" y1="13" x2="12" y2="19"></line>
              <line x1="6" y1="13" x2="12" y2="19"></line>
            </svg>
          </div>
        </Content>
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  min-height: 100vh;
  padding: 100px 150px;
  display: flex;
  align-items: center;
`

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
