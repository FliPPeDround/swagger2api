export const interfaceName = () => {
  return {
    type: 'input',
    name: 'interfaceName',
    message: '请输入axios实例名称',
    default: 'axios',
  }
}

export const interfaceImport = () => {
  return {
    type: 'input',
    name: 'interfaceImport',
    message: '请输入导入axios实例路径',
    default: 'import axios from \'axios\';',
  }
}
