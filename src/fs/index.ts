import fs from 'fs-extra'
import { outFileDir } from '@/answers'

async function example(fileDir: string, data: string) {
  try {
    await fs.outputFile(outFileDir + fileDir, data)
  }
  catch (err) {
    console.error(err)
  }
}

export async function writeApiFsMap(apiFsMap: Map<string, string[]>) {
  apiFsMap.forEach((apiFs, functionName) => {
    const fileDir = `/${functionName}.js`
    const data = apiFs.join('\n')
    example(fileDir, data)
  })
}
