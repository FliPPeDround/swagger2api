import axios from 'axios'

export const getSwaggerJSON = async () => {
  const res = (await axios({
    url: '',
    method: 'get',
    withCredentials: true,
    headers: {
      Cookie: '',
    },
  })).data
  return res
}
