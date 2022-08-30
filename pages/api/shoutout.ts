import { NextApiRequest, NextApiResponse } from 'next'
import { ShoutOutData } from '../../components/Zine/ShoutOut'
import readCSV from '../../utils/readCSV'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ data?: Array<ShoutOutData>; error?: string }>,
) {
  const recordsNuzhat: Array<ShoutOutData> = readCSV({ filePath: './data/shoutout_nuzhat.csv' })
  const recordsStrg: Array<ShoutOutData> = readCSV({ filePath: './data/shoutout_strg.csv' })
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
