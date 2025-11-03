import axios from 'axios'
import { api as fakeApi } from './fakeApi'

const realApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})

const isProduction = import.meta.env.PROD

export const api = isProduction ? fakeApi : realApi
