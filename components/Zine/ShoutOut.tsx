import * as React from 'react'
import styled, { css, keyframes, useTheme } from 'styled-components'
import { useWindowSize } from '../../hooks/useWindowSize'
import { colors } from '../../styles/theme'

interface ShoutOutData {
  message: string
  author: string
}

const shoutoutsData: Array<ShoutOutData> = [
  {
    message: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do',
    author: 'Hanin',
  },
  {
    message: 'Lorem ipsum dolor sit amet',
    author: 'Dulon',
  },
  {
    message: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do',
    author: 'Fathan',
  },
  {
    message: 'Lorem ipsum dolor sit amet',
    author: 'Maiz',
  },
  {
    message: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do',
    author: 'Jampres',
  },
  {
    message: 'Lorem ipsum dolor sit amet',
    author: 'Tahani',
  },
  {
    message: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do',
    author: 'Damcin',
  },
  {
    message: 'Lorem ipsum dolor sit amet',
    author: 'Dinda',
  },
  {
    message: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do',
    author: 'Jijeh',
  },
  {
    message: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do',
    author: 'Hanin',
  },
  {
    message: 'Lorem ipsum dolor sit amet',
    author: 'Dulon',
  },
  {
    message: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do',
    author: 'Fathan',
  },
  {
    message: 'Lorem ipsum dolor sit amet',
    author: 'Maiz',
  },
  {
    message: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do',
    author: 'Jampres',
  },
  {
    message: 'Lorem ipsum dolor sit amet',
    author: 'Tahani',
  },
  {
    message: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do',
    author: 'Damcin',
  },
  {
    message: 'Lorem ipsum dolor sit amet',
    author: 'Dinda',
  },
  {
    message: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do',
    author: 'Jijeh',
  },
]

const mapToShoutOutCard = (data: Array<ShoutOutData>, size: number) => {
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
    const remainder = size - rowLen
    let addIndex = 0

    for (let i = remainder + 1; i < size; i++) {
      if (addIndex > rowLen) {
        addIndex = 0
      }

      const item = row[addIndex]
      row.push(item)
      addIndex++
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
  const rowSize = windowSize.width ? Math.round(windowSize?.width / 215) : 7
  const data = React.useMemo(
    () => mapToShoutOutCard(shoutoutsData, rowSize < 4 ? 4 : rowSize),
    [rowSize],
  )

  return (
    <Container>
      <Wrapper>
        <Header>
          <H2>Shout Out</H2>
        </Header>
        <Content>
          {data.map((shoutouts, i) => {
            return (
              <CardContainer key={i}>
                <CardWrapper reverse={i % 2 === 0}>
                  {shoutouts.map((shoutout, j) => {
                    const variant = shoutOutCardVariants(j)
                    return (
                      <ShoutOutCard
                        key={`${j}+${shoutout.author}`}
                        text={shoutout.message}
                        author={shoutout.author}
                        bgColor={variant.bgColor}
                        textColor={variant.textColor}
                      />
                    )
                  })}
                </CardWrapper>
                <CardWrapper aria-hidden="true" reverse={i % 2 === 0}>
                  {shoutouts.map((shoutout, j) => {
                    const variant = shoutOutCardVariants(j)
                    return (
                      <ShoutOutCard
                        key={`${j}+${shoutout.author}`}
                        text={shoutout.message}
                        author={shoutout.author}
                        bgColor={variant.bgColor}
                        textColor={variant.textColor}
                      />
                    )
                  })}
                </CardWrapper>
              </CardContainer>
            )
          })}
        </Content>
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  background-color: ${(props) => props.theme.colors.cream};
  color: ${(props) => props.theme.colors.midnight};
  overflow: clip;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Header = styled.div`
  padding: 0 150px;
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

const CardWrapper = styled.div<{ reverse?: boolean }>`
  display: flex;
  flex-shrink: 0;
  justify-content: space-around;
  animation: ${scroll} 35s linear infinite;
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
  author: string
  textColor?: string
  bgColor?: string
}

const ShoutOutCard = (props: ShoutOutCardProps) => {
  return (
    <Card bgColor={props.bgColor}>
      <CardText color={props.textColor}>{props.text}</CardText>
      <CardText color={props.textColor} opacity={0.8}>
        {props.author}
      </CardText>
    </Card>
  )
}

const Card = styled.div<{ bgColor?: string }>`
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
