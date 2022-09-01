import styled, { useTheme } from 'styled-components'
import NextImage from 'next/image'
import Link from 'next/link'
import useSWR from 'swr'
import { SharingSessionData } from '../../pages/api/sharing-session'
import { Colors } from 'styles/theme.types'

const sharingSessionCardTheme = (colors: Colors, index: number) => {
  switch (index) {
    case 0:
      return {
        bgColor: colors.cream,
        textColor: colors.torchRed,
      }
    case 1:
      return {
        bgColor: colors.yogyaBlue,
        textColor: colors.white,
      }
    case 2:
    default:
      return {
        bgColor: colors.white,
        textColor: colors.midnight,
      }
  }
}

const SharingSession = () => {
  const theme = useTheme()
  const { data, error } = useSWR<{ data: Array<SharingSessionData> }>(
    '/api/sharing-session',
    (url) => {
      return fetch(url).then((res) => res.json())
    },
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  )

  return (
    <Container>
      <Wrapper>
        {data?.data
          ? data.data.map((item, i) => {
              const cardTheme = sharingSessionCardTheme(theme.colors, i)
              return (
                <SharingCard
                  key={item.title}
                  bgColor={cardTheme.bgColor}
                  textColor={cardTheme.textColor}
                  href={item.href}
                  imgSrc={`/images/${item.image}`}
                  author={`Oleh: ${item.author}`}
                  title={item.title}
                  summary={item.summary || ''}
                  reverse={i % 2 !== 0}
                />
              )
            })
          : null}
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
  href?: string
  imgSrc?: string
}

const SharingCard = (props: SharingCardProps) => {
  return (
    <Link href={props.href || '/'}>
      <a>
        <CardContainer bgColor={props.bgColor} textColor={props.textColor} reverse={props.reverse}>
          {props.reverse ? (
            <>
              <SharingCardContent
                author={props.author}
                title={props.title}
                summary={props.summary}
                reverse={props.reverse}
              />
              <NextImage
                src={props.imgSrc || '/cover'}
                height={440}
                width={750}
                objectFit="cover"
                loading="lazy"
              />
            </>
          ) : (
            <>
              <NextImage
                src={props.imgSrc || '/cover'}
                height={440}
                width={750}
                objectFit="cover"
                loading="lazy"
              />
              <SharingCardContent
                author={props.author}
                title={props.title}
                summary={props.summary}
                reverse={props.reverse}
              />
            </>
          )}
        </CardContainer>
      </a>
    </Link>
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
  min-height: 340px;
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
