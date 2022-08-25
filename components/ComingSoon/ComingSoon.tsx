import * as React from 'react'
import NextImage from 'next/image'
import styled from 'styled-components'
import { useWindowSize } from '../../hooks/useWindowSize'

const Main = styled.main`
  min-height: 100vh;
  padding: 2rem;
  background-color: #ffffff;
`

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 64px);
  position: relative;
  z-index: 2;
`

const Image = styled(NextImage)`
  z-index: 0;
`

const H1 = styled.h1`
  font-size: clamp(2rem, 16vw - 6rem, 6rem);
`

const ComingSoon = () => {
  const size = useWindowSize()

  const src = React.useMemo(
    () => (size.width && size.width <= 480 ? '/bg-mobile.png' : '/bg.png'),
    [size.width],
  )

  return (
    <div>
      <Main>
        <Image
          src={src || '/bg.png'}
          alt="Gallery of Islah 21 Reuni"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <Container>
          <H1>Coming Soon</H1>
          <p>
            <strong>Akyas x GenQ</strong> Special Edition: Reunion
          </p>
        </Container>
      </Main>
    </div>
  )
}

export default ComingSoon
