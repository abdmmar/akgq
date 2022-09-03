import * as React from 'react'
import _Masonry from 'react-masonry-css'
import styled from 'styled-components'
import Image from 'next/image'
import useSWR from 'swr'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'

import _Container from '../Common/Container'
import { ImageData } from 'pages/api/gallery'

const breakpointColumns = {
  default: 4,
  700: 2,
  500: 2,
}

const AKGQGallery = () => {
  const { data, error } = useSWR<{ data: Array<ImageData> }>('/api/gallery', (url) =>
    fetch(url).then((res) => res.json()),
  )
  const images = data ? data.data : []

  const [isOpen, setIsOpen] = React.useState(false)
  const [photoIndex, setPhotoIndex] = React.useState(0)

  const openLightbox = (index: number) => {
    setPhotoIndex(index)
    setIsOpen(true)
  }

  return (
    <Container>
      <Wrapper>
        <div>
          <H2>AKGQ Gallery</H2>
        </div>
        <Masonry
          breakpointCols={breakpointColumns}
          className="gallery-grid"
          columnClassName="gallery-grid-column"
        >
          {images
            ? images.map((img, i) => {
                const imgSrc = '/' + img?.src.replaceAll('\\', '/')

                return (
                  <Image
                    key={img.src}
                    src={imgSrc}
                    width={img?.thumbnail?.width}
                    height={img?.thumbnail?.height}
                    alt={'Photo of Akyas and GenQ magazine crew'}
                    onClick={() => openLightbox(i)}
                    loading="lazy"
                  />
                )
              })
            : null}
        </Masonry>
        {images && isOpen ? (
          <Lightbox
            reactModalProps={{
              isOpen: isOpen,
            }}
            mainSrc={images[photoIndex].src}
            nextSrc={images[(photoIndex + 1) % images.length].src}
            prevSrc={images[(photoIndex + images.length - 1) % images.length].src}
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() =>
              setPhotoIndex((photoIndex + images.length - 1) % images.length)
            }
            onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
          />
        ) : null}
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
  gap: 2rem;
`

const Masonry = styled(_Masonry)`
  display: flex;
  width: auto;
  margin-left: -1rem; /* gutter size offset */
  width: auto;

  & .gallery-grid-column {
    padding-left: 1rem; /* gutter size */
    background-clip: padding-box;
  }

  & .gallery-grid-column > span {
    margin-bottom: 1rem !important;
  }
`

const H2 = styled.h2`
  font-size: clamp(2rem, 16vw - 4rem, 4rem);
  color: ${(props) => props.theme.colors.white};
`

export default AKGQGallery
