import { describe, expect, it } from 'vitest'
import { titleCase } from '@/shared'

describe('titleCase', () => {
  it('should titleCase', () => {
    expect(titleCase('hello')).toMatchInlineSnapshot('"Hello"')
  })
})
