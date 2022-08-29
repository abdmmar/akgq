import * as fs from 'fs'
import { parse } from 'csv-parse/sync'

interface Props {
  filePath: string
}

const readCSV = ({ filePath }: Props) => {
  const headers = ['name', 'doing', 'message']
  const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8' })
  const options = {
    delimiter: '=>',
    columns: headers,
  }

  return parse(fileContent, options)
}

export default readCSV
