import axios, { AxiosInstance } from "axios";

const apiClient: AxiosInstance = axios.create({
  baseURL: 'https://my-json-server.typicode.com/Id1k0mn3/vue-ts-project',
  headers: {
    'Content-type': 'application/json',
  },
});

export default apiClient;