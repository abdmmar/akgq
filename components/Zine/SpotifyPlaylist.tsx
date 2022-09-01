import * as React from 'react'
import styled from 'styled-components'

import _Container from '../Common/Container'
import Text from 'components/Common/Text'

const SpotifyPlaylist = () => {
  return (
    <Container>
      <Wrapper>
        <Content>
          <Text
            as="h3"
            color="cream"
            size="clamp(2rem, 16vw - 3rem, 3rem)"
            weight="700"
            lineHeight="93.52%"
          >
            Disini Kita <br />
            Berkumpul
          </Text>
          <Text color="cream" margin="0">
            Bwat smwa yg denger ini,, smgt y!
          </Text>
        </Content>
        <iframe
          src="https://open.spotify.com/embed/playlist/4pWUPTlowbFY0RN3cR4tI1?utm_source=generator"
          width="100%"
          style={{ maxWidth: '500px' }}
          height="300"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe>
      </Wrapper>
    </Container>
  )
}

const Container = styled(_Container)`
  min-height: auto;
  background-color: ${(props) => props.theme.colors.midnight};
`

const Wrapper = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.yogyaBlue};
  padding: 2rem;
  display: flex;
  justify-content: space-between;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export default React.memo(SpotifyPlaylist)
