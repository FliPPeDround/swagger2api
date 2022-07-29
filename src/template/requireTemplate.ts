import { interfaceName } from '@/answers'

export function requireTemplate(
  url: string,
  method: string,
  argaments: string[],
  body: string,
  name: string,
  summary: string,
) {
  const frontMark = argaments.length > 1 ? '\`' : '\''
  const backMark = argaments.length > 1 ? '\`' : '\''
  return `
// ${summary}
export const ${name} = async (${argaments.join(', ')}) => {
  return await ${interfaceName}({
    url: ${frontMark}${url}${backMark},
    method: '${method}',
    ${body}
  })
}`
}
