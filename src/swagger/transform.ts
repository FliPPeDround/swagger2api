import { importTemplate, requireTemplate } from '@/template'
import { hasChinese } from '@/shared'

export async function getApiFsMap(paths: any) {
  const apiFsMap = new Map()
  Object.keys(paths).forEach((url) => {
    Object.keys(paths[url]).forEach((method) => {
      const body = method === 'post' ? 'data' : 'params'

      const urlList = url.split('/')
      let axiosurl = url
      const descriptionhasCN = hasChinese(paths[url][method]?.description)
      const summary = paths[url][method].summary
      const functionName = url.split('/')[1]
      const argaments = [body]

      for (const index in paths[url][method].parameters) {
        if (paths[url][method].parameters[index].in === 'path') {
          argaments.unshift(paths[url][method].parameters[index].name)
          axiosurl = url.replace(`/{${paths[url][method].parameters[index].name}}`, `/\$\{${paths[url][method].parameters[index].name}\}`)
        }
      }

      const name = descriptionhasCN
        ? urlList[urlList.length - arguments.length].replace(/[${}]/g, '')
        : paths[url][method]?.description

      if (apiFsMap.has(functionName))
        apiFsMap.get(functionName).push(requireTemplate(axiosurl, method, argaments, body, name, summary))

      else
        apiFsMap.set(functionName, [importTemplate, requireTemplate(axiosurl, method, argaments, body, name, summary)])
    })
  })
  return apiFsMap
}

