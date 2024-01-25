import Axios, { AxiosRequestConfig } from 'axios';

// const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? 'http://localhost:3333';

const api = (config: AxiosRequestConfig) => {
  const headers = config.withCredentials
    ? {
        ...config.headers
      }
    : { ...config.headers };

  return Axios({ ...config, baseURL: 'http://localhost:3333', headers });
};

export { api };
