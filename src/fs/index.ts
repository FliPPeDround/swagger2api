import fs from 'fs-extra'

async function example(fileDir: string, data: string) {
  try {
    await fs.outputFile(fileDir, data)
  }
  catch (err) {
    console.error(err)
  }
}

export async function writeApiFsMap(apiFsMap: Map<string, string[]>) {
  apiFsMap.forEach((apiFs, functionName) => {
    const fileDir = `./api/${functionName}.js`
    const data = apiFs.join('\n')
    example(fileDir, data)
  })
}
