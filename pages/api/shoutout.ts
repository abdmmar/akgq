import { NextApiRequest, NextApiResponse } from 'next'
import path from 'path'
import { ShoutOutData } from '../../components/Zine/ShoutOut'
import readCSV from '../../utils/readCSV'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ data?: Array<ShoutOutData>; error?: string }>,
) {
  const dataDir = path.join(process.cwd(), 'data')
  const recordsNuzhat: Array<ShoutOutData> = readCSV({
    filePath: path.join(dataDir, 'shoutout_nuzhat.csv'),
  })
  const recordsStrg: Array<ShoutOutData> = readCSV({
    filePath: path.join(dataDir, 'shoutout_strg.csv'),
  })
  const records = []
  const recordsLen =
    recordsStrg.length >= recordsNuzhat.length ? recordsStrg.length : recordsNuzhat.length

  for (let i = 0; i < recordsLen; i++) {
    const strg = recordsStrg[i]
    const nuzhat = recordsNuzhat[i]

    if (strg) {
      records.push(strg)
    }

    if (nuzhat) {
      records.push(nuzhat)
    }
  }

  if (!records) {
    return res.status(404).json({ error: 'Data not found' })
  }

  return res.status(200).json({ data: records })
}
