import styled, { useTheme } from 'styled-components'
import NextImage from 'next/image'
import Link from 'next/link'
import useSWR from 'swr'
import { SharingSessionData } from '../../pages/api/sharing-session'
import { Colors } from 'styles/theme.types'
import { useWindowSize } from 'hooks/useWindowSize'

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
  const size = useWindowSize()
  const isMobile = size.width && size?.width <= 425

  return (
    <Link href={props.href || '/'}>
      <a>
        <CardContainer bgColor={props.bgColor} textColor={props.textColor} reverse={props.reverse}>
          {props.reverse && !isMobile ? (
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
      <div>
        <p>{props.summary}</p>
        <Label>
          <p>Read More</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1rem"
            height="1rem"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 16 16"
            style={{
              transform: 'rotate(215deg)',
            }}
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="m3.147 9l5 5h.707l5-5l-.707-.707L9 12.439V2H8v10.44L3.854 8.292L3.147 9z"
              clipRule="evenodd"
            />
          </svg>
        </Label>
      </div>
    </CardContent>
  )
}

const Label = styled.div<{ borderColor?: string }>`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.9rem;
  padding: 4px 10px;
  margin-top: 1rem;
  border-radius: 50px;
  width: fit-content;
`

const CardContainer = styled.div<{ bgColor?: string; textColor?: string; reverse?: boolean }>`
  display: grid;
  min-height: 340px;
  grid-template-columns: ${(props) => (props.reverse ? '60% 40% ' : '40% 60%')};
  background-color: ${(props) => (props.bgColor ? props.bgColor : props.theme.colors.white)};
  color: ${(props) => (props.bgColor ? props.textColor : props.theme.colors.midnight)};

  @media screen and (max-width: 425px) {
    grid-template-columns: 1fr;
  }

  ${Label} {
    border: 1px solid ${(props) => (props.bgColor ? props.textColor : props.theme.colors.midnight)};
  }
`

const CardContent = styled.div<{ reverse?: boolean }>`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: ${(props) => (props.reverse ? '20px 20px 20px 170px' : '20px 170px 20px 20px')};

  @media screen and (max-width: 1024px) {
    padding: ${(props) => (props.reverse ? '20px 20px 20px 120px' : '20px 120px 20px 20px')};
  }

  @media screen and (max-width: 768px) {
    padding: 20px;
  }

  @media screen and (max-width: 425px) {
    padding: 20px;
  }
`

const H2 = styled.h2`
  margin-bottom: 2rem;
  font-size: clamp(1.5rem, 16vw - 2rem, 2rem);
`

export default SharingSession
