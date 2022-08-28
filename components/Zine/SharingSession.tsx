import styled, { useTheme } from 'styled-components'
import NextImage from 'next/image'

const SharingSession = () => {
  const theme = useTheme()

  return (
    <Container>
      <Wrapper>
        <SharingCard
          bgColor={theme.colors.cream}
          textColor={theme.colors.torchRed}
          author="Oleh: Dinda Qatrunnada"
          title="Cerita Wapjeh: Membangun Bisnis Olshop dari Nol"
          summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
        />
        <SharingCard
          bgColor={theme.colors.yogyaBlue}
          textColor={theme.colors.white}
          author="Oleh: Azizah Qalbi"
          title="Cerita Oik: Cara Menjadi DevOps Engineer"
          summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
          reverse
        />
        <SharingCard
          bgColor={theme.colors.white}
          textColor={theme.colors.midnight}
          author="Oleh: Abdulah Azzam"
          title="Cerita Zidan: Menjadi Guru"
          summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
        />
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.midnight};
  color: ${(props) => props.theme.colors.white};
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

interface SharingCardProps {
  bgColor?: string
  textColor?: string
  reverse?: boolean
  title: string
  author: string
  summary: string
}

const SharingCard = (props: SharingCardProps) => {
  return (
    <CardContainer bgColor={props.bgColor} textColor={props.textColor} reverse={props.reverse}>
      {props.reverse ? (
        <>
          <SharingCardContent
            author={props.author}
            title={props.title}
            summary={props.summary}
            reverse={props.reverse}
          />
          <NextImage src="/akgq-peace.jpg" height={440} width={750} objectFit="cover" />
        </>
      ) : (
        <>
          <NextImage src="/akgq-peace.jpg" height={440} width={750} objectFit="cover" />
          <SharingCardContent
            author={props.author}
            title={props.title}
            summary={props.summary}
            reverse={props.reverse}
          />
        </>
      )}
    </CardContainer>
  )
}

interface SharingCardContentProps {
  title: string
  author: string
  summary: string
  reverse?: boolean
}

const SharingCardContent = (props: SharingCardContentProps) => {
  return (
    <CardContent reverse={props.reverse}>
      <div>
        <p>{props.author}</p>
        <H2>{props.title}</H2>
      </div>
      <p>{props.summary}</p>
    </CardContent>
  )
}

const CardContainer = styled.div<{ bgColor?: string; textColor?: string; reverse?: boolean }>`
  display: grid;
  grid-template-columns: ${(props) => (props.reverse ? '60% 40% ' : '40% 60%')};
  background-color: ${(props) => (props.bgColor ? props.bgColor : props.theme.colors.white)};
  color: ${(props) => (props.bgColor ? props.textColor : props.theme.colors.midnight)};
`

const CardContent = styled.div<{ reverse?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${(props) => (props.reverse ? '20px 20px 20px 170px' : '20px 170px 20px 20px')};

  @media screen and (max-width: 1024px) {
    padding: ${(props) => (props.reverse ? '20px 20px 20px 120px' : '20px 170px 20px 20px')};
  }
`

const H2 = styled.h2`
  margin-bottom: 2rem;
  font-size: clamp(1.5rem, 16vw - 2rem, 2rem);
`

export default SharingSession
