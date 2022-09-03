import { NextApiRequest, NextApiResponse } from 'next'
import path from 'path'
import fs from 'node:fs'
import fsp from 'node:fs/promises'
import sharp from 'sharp'

export interface ImageData {
  src: string
  width?: number
  height?: number
  format?: string
  thumbnail?: ImageData
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ data?: Array<ImageData | undefined>; error?: string }>,
) {
  const galleryPath = 'images/gallery'
  const galleryThumbnailPath = path.join(galleryPath, 'thumbnails')
  const publicGalleryPath = path.join('public', galleryPath)
  const publicGalleryThumbnailPath = path.join(publicGalleryPath, 'thumbnails')
  const galleryDir = path.join(process.cwd(), publicGalleryPath)
  const galleryThumbnailDir = path.join(process.cwd(), publicGalleryThumbnailPath)
  const galleryList = fs.readdirSync(galleryDir, { encoding: 'utf-8' })
  const gallery = await Promise.all(
    galleryList.map(async (fname) => {
      const imageFilePath = path.join(galleryDir, fname)
      const imageFileStat = await fsp.stat(imageFilePath)

      if (imageFileStat.isFile()) {
        const thumbnailFilePath = path.join(galleryThumbnailDir, fname)
        // const metadata = await sharp(fileName)
        //   .resize({ width: 250 })
        //   .toFormat('jpeg', { mozjpeg: true })
        //   .toFile(thumbnailPath)
        const image = await sharp(imageFilePath).metadata()
        const thumbnail = await sharp(thumbnailFilePath).metadata()
        const imageData = {
          src: path.join(galleryPath, fname),
          width: image.width,
          height: image.height,
          format: image.format as string,
          thumbnail: {
            src: path.join(galleryThumbnailPath, fname),
            width: thumbnail.width,
            height: thumbnail.height,
            format: thumbnail.format as string,
          },
        }
        return imageData
      }
    }),
  )
  const cleanGallery = gallery.filter((img) => img)

  return res.status(200).json({ data: cleanGallery })
}
