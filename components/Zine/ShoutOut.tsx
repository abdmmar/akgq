import * as React from 'react'
import styled, { keyframes } from 'styled-components'
import useSWR from 'swr'

import { useWindowSize } from '../../hooks/useWindowSize'
import { colors } from 'styles/theme'
import _Container from 'components/Common/Container'
import Loading from 'components/Loading'

export interface ShoutOutData {
  message: string
  name: string
  doing?: string
}

const mapToShoutOutCard = (data: Array<ShoutOutData>, size: number) => {
  if (data.length === 0) return []

  const cards: Array<Array<ShoutOutData>> = []
  let row: Array<ShoutOutData> = []
  let count = 0

  for (const shoutout of data) {
    const isRow = count !== 0 && count % size === 0

    if (isRow) {
      row.push(shoutout)
      cards.push(row)
      row = []
      count = 0
    } else {
      row.push(shoutout)
      count++
    }
  }

  // Duplicate row item to match size
  const rowLen = row.length
  if (rowLen < size) {
    let addIndex = 0

    for (let i = rowLen + 1; i < size; i++) {
      if (addIndex > rowLen) {
        addIndex = 0
      }

      const item = row[addIndex]
      if (item) {
        row.push(item)
        addIndex++
      }
    }
  }

  cards.push(row)

  return cards
}

interface CardVariant {
  bgColor: string
  textColor: string
}

const shoutOutCardVariants = (index: number): CardVariant => {
  if (index === 0) {
    return {
      bgColor: colors.midnight,
      textColor: colors.white,
    }
  } else if (index % 4 === 0) {
    return {
      bgColor: colors.torchRed,
      textColor: colors.cream,
    }
  } else if (index % 3 === 0) {
    return {
      bgColor: colors.yogyaBlue,
      textColor: colors.cream,
    }
  } else if (index % 2 === 0) {
    return {
      bgColor: colors.midnight,
      textColor: colors.white,
    }
  } else {
    return {
      bgColor: colors.white,
      textColor: colors.midnight,
    }
  }
}

const ShoutOut = () => {
  const windowSize = useWindowSize()
  const isMobile = windowSize.width && windowSize.width <= 420 ? true : false
  const rowSize = windowSize.width ? Math.round(windowSize?.width / 215) : 7
  const rowItemSize = rowSize < 4 ? 4 : rowSize

  const { data, isValidating } = useSWR<{ data: Array<ShoutOutData> }>(
    '/api/shoutout',
    (url) => {
      return fetch(url).then((res) => res.json())
    },
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  )

  const shoutoutData = React.useMemo(
    () => (data ? mapToShoutOutCard(data.data, rowItemSize) : []),
    [data, rowItemSize],
  )

  return (
    <Container>
      <Wrapper>
        <Header>
          <H2>Shout Out</H2>
        </Header>
        <Content>
          {!shoutoutData && isValidating ? <Loading /> : null}
          {!isValidating && shoutoutData.length > 0
            ? shoutoutData.map((shoutouts, i) => {
                return (
                  <CardContainer key={i}>
                    <CardWrapper reverse={i % 2 === 0} isMobile={isMobile || rowSize <= 4}>
                      {shoutouts.map((shoutout, j) => {
                        const variant = shoutOutCardVariants(j)
                        return (
                          <ShoutOutCard
                            key={`${j}+${shoutout.name}`}
                            text={shoutout.message}
                            name={shoutout.name}
                            doing={shoutout.doing}
                            bgColor={variant.bgColor}
                            textColor={variant.textColor}
                          />
                        )
                      })}
                    </CardWrapper>
                    <CardWrapper
                      aria-hidden="true"
                      reverse={i % 2 === 0}
                      isMobile={isMobile || rowSize <= 4}
                    >
                      {shoutouts.map((shoutout, j) => {
                        const variant = shoutOutCardVariants(j)
                        return (
                          <ShoutOutCard
                            key={`${j}+${shoutout.name}`}
                            text={shoutout.message}
                            name={shoutout.name}
                            doing={shoutout.doing}
                            bgColor={variant.bgColor}
                            textColor={variant.textColor}
                          />
                        )
                      })}
                    </CardWrapper>
                  </CardContainer>
                )
              })
            : null}
        </Content>
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.colors.cream};
  color: ${(props) => props.theme.colors.midnight};
  overflow: clip;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Header = styled(_Container)`
  min-height: unset;
  padding: 20px;
  background-color: ${(props) => props.theme.colors.cream};
`

const H2 = styled.h2`
  font-size: clamp(2rem, 16vw - 4rem, 4rem);
  color: ${(props) => props.theme.colors.midnight};
  text-transform: uppercase;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
`

const scroll = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-100%));
  }
  `

/**
 * Source:
 * - https://codepen.io/hexagoncircle/pen/wvmjomb
 * - https://ryanmulligan.dev/blog/css-marquee/
 */
const CardWrapper = styled.ul<{ reverse?: boolean; isMobile?: boolean }>`
  padding: 0;
  display: flex;
  flex-shrink: 0;
  justify-content: space-around;
  animation: ${scroll} ${(props) => (props.isMobile ? '30s' : '45s')} linear infinite;
  animation-direction: ${(props) => (props.reverse ? 'reverse' : '')};
`

const CardContainer = styled.div`
  display: flex;
  overflow: hidden;
  user-select: none;
  position: relative;

  &:hover ${CardWrapper} {
    animation-play-state: paused;
  }
`

interface ShoutOutCardProps {
  text: string
  name: string
  doing?: string
  textColor?: string
  bgColor?: string
}

const ShoutOutCard = (props: ShoutOutCardProps) => {
  return (
    <Card bgColor={props.bgColor}>
      <CardText color={props.textColor}>{props.text}</CardText>
      <CardText color={props.textColor} opacity={0.8}>
        {props.name}
        {props.doing ? ` ??? ${props.doing}` : null}
      </CardText>
    </Card>
  )
}

const Card = styled.li<{ bgColor?: string }>`
  padding: 0.5rem;
  background-color: ${(props) => (props.bgColor ? props.bgColor : props.theme.colors.white)};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 215px;
`

const CardText = styled.p<{ color?: string; opacity?: number }>`
  font-size: 0.9rem;
  color: ${(props) => (props.color ? props.color : props.theme.colors.midnight)};
  opacity: ${(props) => (props.opacity ? props.opacity : 1)};
`

export default ShoutOut
