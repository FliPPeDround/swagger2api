import { describe, expect, it } from 'vitest'
import { getApiFsMap } from './../transform'
import SwaggerJSON from './swaggerMock.json'

describe('transform', () => {
  it('should return an object', async () => {
    expect(await getApiFsMap(SwaggerJSON.paths)).toMatchInlineSnapshot()
  })
})
