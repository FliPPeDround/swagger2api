export function hasChinese(str: string) {
  return typeof str === 'undefined' ? true : /[\u4E00-\u9FA5]+/g.test(str)
}
