import { NextApiRequest, NextApiResponse } from 'next'
import { ShoutOutData } from '../../components/Zine/ShoutOut'
import readCSV from '../../utils/readCSV'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ data?: Array<ShoutOutData>; error?: string }>,
) {
  const records: Array<ShoutOutData> = readCSV({ filePath: './data/shoutout_nuzhat.csv' })

  if (!records) {
    return res.status(404).json({ error: 'Data not found' })
  }

  return res.status(200).json({ data: records })
}
