import axios from 'axios'

class ApiClient {
  constructor() {
    this.baseURL = import.meta.env.VITE_API_BASE_URL || ''
  }

  setAuthTokenProvider(authTokenProvider) {
    axios.interceptors.request.use(async (config) => {
      try {
        const token = await authTokenProvider()
        if (token) {
          return {
            ...config,
            headers: {
              ...config.headers,
              Authorization: `Bearer ${token}`,
            },
          }
        }
      } catch (error) {
        console.error('Failed to get auth token:', error)
      }
      return config
    })
  }

  async get(endpoint, params = {}) {
    try {
      const response = await axios.get(`${this.baseURL}/${endpoint}`, { params })
      return response.data
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  async post(endpoint, data = {}, config = {}) {
    const defaultConfig = { headers: { 'Content-Type': 'application/json' } }
    const mergedConfig = {
      ...defaultConfig,
      ...config,
      headers: {
        ...defaultConfig.headers,
        ...config.headers,
      },
    }

    try {
      const response = await axios.post(`${this.baseURL}/${endpoint}`, data, mergedConfig)
      return response.data
    } catch (error) {
      console.error(error)
      throw error
    }
  }
}

export default new ApiClient()
