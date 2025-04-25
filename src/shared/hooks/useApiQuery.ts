import { useQuery, QueryOptions } from '@tanstack/react-query';
import { fetcher } from '@/shared/api/fetcher';

/**
 * Хук для выполнения GET-запросов.
 * 
 * @template T - тип получаемых данных
 * @param {string} url - путь запроса
 * @param {Omit<QueryOptions, 'queryKey' | 'queryFn'>} [options] - опции query
 * @returns useQuery результат
 *
 * @example
 * const { data, isLoading } = useApiQuery<User[]>('/users');
 */
export function useApiQuery<T = unknown>(url: string, options?: Omit<QueryOptions<T, Error>, 'queryKey' | 'queryFn'>) {
  return useQuery<T, Error>({
    queryKey: [url],
    queryFn: () => fetcher<T>('get', url),
    ...options,
  });
}
