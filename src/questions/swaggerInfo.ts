export const swaggerUrl = () => {
  return {
    type: 'input',
    name: 'swaggerUrl',
    message: '请输入swagger地址',
    validate: (value: string) => {
      if (value.length)
        return true

      return '请输入swagger地址'
    },
  }
}

export const swaggerCookies = () => {
  return {
    type: 'input',
    name: 'swaggerCookies',
    message: '请输入swagger cookies',
  }
}
