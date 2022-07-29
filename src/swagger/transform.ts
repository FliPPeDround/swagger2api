import { importTemplate, requireTemplate } from '@/template'
import { hasChinese, titleCase } from '@/shared'

function getFuncName(
  urlList: string[],
  argumentsList: string[],
  description: string,
) {
  const hasCN = hasChinese(description)
  let funcName = ''
  if (hasCN) {
    let name = urlList[urlList.length - argumentsList.length]
    if (argumentsList.length > 1)
      name = `${name}by${titleCase(urlList[urlList.length - argumentsList.length + 1].replace(/[${}]/g, ''))}`
    funcName = name
  }
  else {
    funcName = description
  }
  return funcName
}

export async function getApiFsMap(paths: any) {
  const apiFsMap = new Map()
  Object.keys(paths).forEach((url) => {
    Object.keys(paths[url]).forEach((method) => {
      const body = method === 'post' ? 'data' : 'params'

      const urlList = url.split('/')
      let axiosurl = url
      const description = paths[url][method]?.description

      const summary = paths[url][method].summary
      const fileName = url.split('/')[1]
      const argaments = [body]

      for (const index in paths[url][method].parameters) {
        if (paths[url][method].parameters[index].in === 'path') {
          argaments.unshift(paths[url][method].parameters[index].name)
          axiosurl = url.replace(`/{${paths[url][method].parameters[index].name}}`, `/\$\{${paths[url][method].parameters[index].name}\}`)
        }
      }

      const functionName = getFuncName(urlList, argaments, description)

      if (apiFsMap.has(fileName))
        apiFsMap.get(fileName).push(requireTemplate(axiosurl, method, argaments, body, functionName, summary))

      else
        apiFsMap.set(fileName, [importTemplate, requireTemplate(axiosurl, method, argaments, body, functionName, summary)])
    })
  })
  return apiFsMap
}

