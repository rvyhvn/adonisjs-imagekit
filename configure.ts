/*
|--------------------------------------------------------------------------
| Configure hook
|--------------------------------------------------------------------------
|
| The configure hook is called when someone runs "node ace configure <package>"
| command. You are free to perform any operations inside this function to
| configure the package.
|
| To make things easier, you have access to the underlying "ConfigureCommand"
| instance and you can use codemods to modify the source files.
|
*/

import ConfigureCommand from '@adonisjs/core/commands/configure'
import { stubsRoot } from './stubs/main.js'

export async function configure(command: ConfigureCommand) {
  const codemods = await command.createCodemods()

  const packageName = 'adonisjs-imagekit'

  /**
   * Define the configuration file
   */
  await codemods.makeUsingStub(stubsRoot, 'config/imagekit.stub', {
    packageName: packageName,
  })

  await codemods.updateRcFile((rcFile) => {
    rcFile.addProvider(`${packageName}/provider`)
  })

  await codemods.defineEnvVariables({
    IMAGEKIT_URL_ENDPOINT: '',
    IMAGEKIT_PUBLIC_KEY: '',
    IMAGEKIT_PRIVATE_KEY: '',
  })

  await codemods.defineEnvValidations({
    variables: {
      IMAGEKIT_URL_ENDPOINT: 'Env.schema.string()',
      IMAGEKIT_PUBLIC_KEY: 'Env.schema.string()',
      IMAGEKIT_PRIVATE_KEY: 'Env.schema.string()',
    },
  })
}
