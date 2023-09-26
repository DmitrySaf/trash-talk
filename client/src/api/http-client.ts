import axios, { type AxiosRequestConfig } from 'axios'

export const request = async ({ method, url, data, params }: AxiosRequestConfig) => {
  // const apiUrl = import.meta.env.API_URL
  const newUrl = `http://localhost:5000/api/${url}`
  const { data: responeData } = await axios.request({ method, url: newUrl, data, params })

  return responeData
}
