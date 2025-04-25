import { apiClient } from ".";

/**
 * Универсальный fetcher для REST-запросов.
 * 
 * @template T - тип возвращаемого значения
 * @param {string} method - HTTP метод (GET, POST и т.д.)
 * @param {string} url - путь запроса
 * @param {unknown} [data] - тело запроса (необязательно)
 * @returns {Promise<T>} - промис с данными
 *
 * @example
 * const data = await fetcher<User[]>('get', '/users');
 */
export const fetcher = async <T>(method: string, url: string, data?: unknown): Promise<T> => {
  const response = await apiClient.request<T>({ method, url, data });
  return response.data;
};