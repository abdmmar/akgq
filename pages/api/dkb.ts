import { NextApiRequest, NextApiResponse } from 'next'
import path from 'path'
import fs from 'node:fs/promises'
import { DKBData } from 'components/Zine/DisiniKitaBerjumpa'

export interface DKBRaw {
  data: Array<DKBData>
}

export interface DKBList {
  short: Array<DKBData>
  long: Array<DKBData>
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ data?: DKBList; error?: string }>,
) {
  const dataDir = path.join(process.cwd(), 'data')
  const fileContent = await fs.readFile(dataDir + '/dkb.json', 'utf-8')
  const dkbListRaw: DKBRaw = JSON.parse(fileContent)
  const dkbList: DKBList = {
    short: [],
    long: [],
  }

  for (const item of dkbListRaw.data) {
    if (item.message.split(' ').length > 40) {
      dkbList.long.push(item)
    } else {
      dkbList.short.push(item)
    }
  }

  return res.status(200).json({ data: dkbList })
}
