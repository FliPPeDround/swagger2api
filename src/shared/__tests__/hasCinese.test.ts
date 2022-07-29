import { describe, expect, it } from 'vitest'
import { hasChinese } from '@/shared'

describe('hasChinese', () => {
  it('should return false', () => {
    expect(hasChinese('abc')).toMatchInlineSnapshot('false')
  })
  it('should return true', () => {
    expect(hasChinese('中文')).toMatchInlineSnapshot('true')
  })
  it('should return false', () => {
    const foo = undefined
    expect(hasChinese(foo)).toMatchInlineSnapshot('true')
  })
},
)
