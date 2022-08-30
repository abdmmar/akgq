import * as React from 'react'
import styled from 'styled-components'
import _Container from '../Common/Container'

const SpotifyPlaylist = () => {
  return (
    <Container>
      <iframe
        src="https://open.spotify.com/embed/playlist/2kHQIzAUbvMCUrcCflF9PT?utm_source=generator&theme=0"
        width="100%"
        height="300"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      ></iframe>
    </Container>
  )
}

const Container = styled(_Container)`
  min-height: auto;
  background-color: ${(props) => props.theme.colors.midnight};
`

export default React.memo(SpotifyPlaylist)
