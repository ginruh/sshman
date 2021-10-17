import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import AddSSHKeyModule from './cli/add/add.js'

// eslint-disable-next-line no-unused-vars
const _ = yargs(hideBin(process.argv))
  .scriptName('sshman')
  .command(AddSSHKeyModule)
  .help()
  .argv
