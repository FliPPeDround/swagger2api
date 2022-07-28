import { getSwaggerJSON } from './swaggerJson'
import { importTemplate, requireTemplate } from '@/template'
const { paths } = await getSwaggerJSON()

export async function getApiFsMap() {
  const apiFsMap = new Map()
  Object.keys(paths).forEach((url) => {
    Object.keys(paths[url]).forEach((method) => {
      const body = method === 'post' ? 'data' : 'params'
      const name = url.substring(url.lastIndexOf('/') + 1)
      const summary = paths[url][method].summary
      const functionName = url.split('/')[1]
      if (apiFsMap.has(functionName))
        apiFsMap.get(functionName).push(requireTemplate(url, method, body, name, summary))

      else
        apiFsMap.set(functionName, [importTemplate, requireTemplate(url, method, body, name, summary)])
    })
  })
  return apiFsMap
}
