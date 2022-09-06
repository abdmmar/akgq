import * as React from 'react'
import Link from 'next/link'
import { DKBList } from 'pages/api/dkb'
import Masonry from 'react-masonry-css'
import styled from 'styled-components'
import useSWR from 'swr'
import _Container from '../Common/Container'
import Text from '../Common/Text'

export interface DKBData {
  name: string
  message: string
}

const shortBreakpointColumns = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
}

const longBreakpointColumns = {
  default: 2,
  500: 1,
}

const DisiniKitaBerjumpa = () => {
  const { data, error } = useSWR<{ data: DKBList }>('/api/dkb', (url) =>
    fetch(url).then((res) => res.json()),
  )

  const [showLongList, setShowLongList] = React.useState(false)

  return (
    <Container>
      <Wrapper>
        <div>
          <H2>Disini Kita Berjumpa</H2>
          <p>Ada kejadian apa aja sih di reuni kemaren?</p>
        </div>
        <Content>
          <ContentWrapper>
            <CerpenContainer>
              <Link href="/dkb/cerpen-refa">
                <a>
                  <CerpenContent>
                    <div>
                      <Text margin="0 0 0.5rem 0" color="torchRed">
                        Cerita Pendek
                      </Text>
                      <Text
                        as="h3"
                        size="1.5rem"
                        weight="700"
                        lineHeight="94.52%"
                        color="torchRed"
                        margin="0"
                      >
                        Reuni: Semburat rindu yang terbit, menyongsong masa depan cerah
                      </Text>
                    </div>
                    <Text fontStyle="italic" color="yogyaBlue">
                      Oleh: Refa Triana
                    </Text>
                  </CerpenContent>
                </a>
              </Link>
            </CerpenContainer>
            <CerpenContainer>
              <Link href="/dkb/cerpen-adib">
                <a>
                  <CerpenContent>
                    <div>
                      <Text margin="0 0 0.5rem 0" color="torchRed">
                        Cerita Pendek
                      </Text>
                      <Text
                        as="h3"
                        size="1.5rem"
                        weight="700"
                        lineHeight="94.52%"
                        color="torchRed"
                        margin="0"
                      >
                        Arya Sang Manajer
                      </Text>
                    </div>
                    <Text fontStyle="italic" color="yogyaBlue">
                      Oleh: Adib Surya
                    </Text>
                  </CerpenContent>
                </a>
              </Link>
            </CerpenContainer>
          </ContentWrapper>
          <div>
            {data?.data.short && (
              <Masonry
                breakpointCols={shortBreakpointColumns}
                className="dkb-masonry-grid"
                columnClassName="dkb-masonry-grid-column"
              >
                {data.data.short.map((item, i) => {
                  return (
                    <ShoutOut key={`${i}${item.name}`}>
                      <Text>{item.message}</Text>
                      <Label>{item.name}</Label>
                    </ShoutOut>
                  )
                })}
              </Masonry>
            )}
            {!showLongList ? (
              <Button onClick={() => setShowLongList(true)}>Load More Story</Button>
            ) : null}
            {data?.data.long && showLongList ? (
              <Masonry
                breakpointCols={longBreakpointColumns}
                className="dkb-masonry-grid"
                columnClassName="dkb-masonry-grid-column"
              >
                {data.data.long.map((item, i) => {
                  return (
                    <ShoutOut key={`${i}${item.name}`}>
                      <Text>{item.message}</Text>
                      <Label>{item.name}</Label>
                    </ShoutOut>
                  )
                })}
              </Masonry>
            ) : null}
          </div>
        </Content>
      </Wrapper>
    </Container>
  )
}

const Container = styled(_Container)`
  background-color: ${(props) => props.theme.colors.midnight};
  color: ${(props) => props.theme.colors.white};
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 52px;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 5rem;
`

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`

const H2 = styled.h2`
  font-size: clamp(2rem, 16vw - 3rem, 3rem);
  color: ${(props) => props.theme.colors.white};
`

const CerpenContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const CerpenContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem;
  min-height: 230px;
  background-color: ${(props) => props.theme.colors.cream};
  box-shadow: 10px 10px 0px ${(props) => props.theme.colors.yogyaBlue};
  transition: box-shadow 150ms;

  &:hover {
    box-shadow: none;
  }
`

const ShoutOut = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.midnight};
  color: ${(props) => props.theme.colors.cream};
  border-bottom: 1px solid ${(props) => props.theme.colors.white};
`

const Label = styled(Text)`
  opacity: 0.6;
  font-size: 0.9rem;
  padding: 3px 8px;
  border: 1px solid white;
  border-radius: 50px;
  width: fit-content;
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

export default DisiniKitaBerjumpa
