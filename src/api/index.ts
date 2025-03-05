import axios, { AxiosRequestConfig } from "axios";

type GetUrl =
  | `/discover/movie${string}`
  | `/movie/upcoming${string}`
  | `/movie/${string}`
  | `/movie/${string}/credits`
  | "/genre/movie/list";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
});

instance.interceptors.request.use(
  (config) => {
    const token = process.env.NEXT_PUBLIC_API_KEY;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

const get = <TResponse>(url: GetUrl, config?: AxiosRequestConfig) =>
  instance.get<TResponse>(url, config);

const Api = {
  get,
};

export { Api };
