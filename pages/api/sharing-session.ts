import { NextApiRequest, NextApiResponse } from 'next'
import path from 'path'
import fs from 'node:fs'
import matter from 'gray-matter'

export interface SharingSessionData {
  author: string
  title: string
  summary?: string
  href?: string
  image?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ data?: Array<SharingSessionData | undefined>; error?: string }>,
) {
  const mdxDir = path.join(process.cwd(), 'pages')
  const mdxs: Array<SharingSessionData | undefined> = fs
    .readdirSync(mdxDir, { encoding: 'utf-8' })
    .map((fname) => {
      const fileName = path.join(mdxDir, fname)
      if (fname.startsWith('sharing-session') && fileName.endsWith('.mdx')) {
        const fileContent = fs.readFileSync(fileName, 'utf-8')
        const { data } = matter(fileContent)
        const info = { ...data, href: fname.split('.mdx')[0] }
        return info as SharingSessionData
      }
    })
    .filter((mdx) => mdx)

  return res.status(200).json({ data: mdxs })
}
