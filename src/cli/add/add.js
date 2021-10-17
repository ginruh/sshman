/**
 * @private
 * @param a {number}
 * @param b {number}
 * @returns {number}
 */
export const add = (a, b) => a + b

/**
 * @type {CLIModule}
 */
const AddSSHKeyModule = {
  command: 'add <a> <b>',
  alias: ['add', 'a'],
  describe: 'Add 2 numbers',
  builder: {
    a: {
      type: 'number',
      default: 0,
      describe: 'first number'
    },
    b: {
      type: 'number',
      default: 0,
      describe: 'second number'
    }
  },
  handler: argv => {
    const { a, b } = argv
    console.log(
      `${add(a, b)}`
    )
  }
}

export default AddSSHKeyModule
