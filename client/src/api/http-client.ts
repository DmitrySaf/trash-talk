import axios, { type AxiosRequestConfig } from 'axios'

export const request = async ({ method, url, data, params }: AxiosRequestConfig) => {
  const apiUrl = import.meta.env.API_URL
  const newUrl = `${apiUrl}${url}`
  const { data: responeData } = await axios.request({ method, url: newUrl, data, params })

  return responeData
}
