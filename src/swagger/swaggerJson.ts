import axios from 'axios'
import { swaggerCookies as Cookie, swaggerUrl as url } from '@/answers'

export const getSwaggerJSON = async () => {
  const res = (await axios({
    url,
    method: 'get',
    withCredentials: true,
    headers: {
      Cookie,
    },
  })).data
  return res
}
