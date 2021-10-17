import assert from 'assert'
import { add } from '../../src/cli/add/add.js'

describe('add.js', () => {
  it('1+1=2', () => {
    const result = add(1, 1)
    assert.strictEqual(result, 2)
  })
})
