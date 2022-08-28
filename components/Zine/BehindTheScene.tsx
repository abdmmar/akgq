import styled from 'styled-components'
import NextImage from 'next/image'
import Container from '../Common/Container'

const BehindTheScene = () => {
  return (
    <Container>
      <Wrapper>
        <Content>
          <div>
            <Text>Oleh: Nadia Tahani</Text>
            <H2>
              Behind <br /> The Scene
            </H2>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam,
            </Text>
          </div>
          <Button>Read More</Button>
        </Content>
        <NextImage
          src="/akgq-peace.jpg"
          width={470}
          height={700}
          objectFit="cover"
          alt="Illustration about Tugu Jogja"
        />
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
`

const H2 = styled.h2`
  font-size: clamp(2rem, 16vw - 7rem, 7rem);
  line-height: 0.9;
  margin-bottom: 1.25rem;
  color: ${(props) => props.theme.colors.midnight};
  letter-spacing: -0.035em;
  margin-left: -5px;
`

const Text = styled.p<{ color?: string }>`
  margin-bottom: 1rem;
  max-width: 60ch;
  color: ${(props) => props.color || props.theme.colors.yogyaBlue};
`

const Button = styled.button`
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
