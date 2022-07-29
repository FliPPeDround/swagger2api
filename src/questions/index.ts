import inquirer from 'inquirer'
import { swaggerCookies, swaggerUrl } from './swaggerInfo'
import outFiledir from './outFiledir'
import { interfaceImport, interfaceName } from './axiosInterface'

export default () => {
  return inquirer.prompt([
    swaggerUrl(),
    swaggerCookies(),
    outFiledir(),
    interfaceName(),
    interfaceImport(),
  ])
}
