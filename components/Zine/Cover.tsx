import NextImage from 'next/image'

import { useWindowSize } from 'hooks/useWindowSize'

const Cover = () => {
  const size = useWindowSize()

  return (
    <NextImage
      src={size?.width && size.width <= 500 ? '/images/cover-mobile.PNG' : '/images/cover.PNG'}
      width={size?.width && size.width <= 500 ? 1041 : 1953}
      height={size?.width && size.width <= 500 ? 1785 : 1323}
      objectFit="cover"
      layout="responsive"
      alt="Covert Art of Islah 21"
      priority={true}
    />
  )
}

export default Cover
