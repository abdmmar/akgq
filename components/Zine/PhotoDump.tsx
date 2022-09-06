import styled from 'styled-components'
import NextImage from 'next/image'
import _Container from '../Common/Container'

const PhotoDump = () => {
  return (
    <Container>
      <Wrapper>
        <Header>
          <H2>Photo Dump</H2>
        </Header>
        {Array(8)
          .fill(1)
          .map((_, i) => (
            <NextImage
              key={i + 1}
              src={`/images/photodump/${i + 1}.png`}
              layout="responsive"
              objectFit="cover"
              loading="lazy"
              width={1953}
              height={1323}
            />
          ))}
      </Wrapper>
    </Container>
  )
}

const Container = styled(_Container)`
  padding: 0;
  background-color: ${(props) => props.theme.colors.midnight};
  color: ${(props) => props.theme.colors.white};
`

const Wrapper = styled.div`
  width: 100%;
`

const Header = styled(_Container)`
  min-height: unset;
  padding: 20px 150px;

  @media screen and (max-width: 1024px) {
    padding: 20px 100px;
  }

  @media screen and (max-width: 768px) {
    padding: 20px 50px;
  }

  @media screen and (max-width: 425px) {
    padding: 20px 20px;
  }
`

const H2 = styled.h2`
  margin-bottom: 2rem;
  font-size: clamp(2rem, 16vw - 4rem, 4rem);
  color: ${(props) => props.theme.colors.white};
`

export default PhotoDump
