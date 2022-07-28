export function requireTemplate(
  url: string,
  method: string,
  body: string,
  name: string,
  summary: string,
) {
  return `
// ${summary}
export const ${name} = async (${body}) => {
  return await axios({
    url: '${url}',
    method: '${method}',
    ${body}
  })
}`
}
