import { useMutation, useQuery } from '@tanstack/react-query';
import { apiClient } from '../api';

interface GraphQLRequest {
  query: string;
  variables?: Record<string, unknown>;
}

/**
 * Выполнение GraphQL-запроса через POST /graphql
 * 
 * @template T - тип данных
 * @param {string[]} key - ключ кэша
 * @param {GraphQLRequest} body - объект запроса
 * @returns useQuery результат
 *
 * @example
 * const { data } = useGraphQLQuery(['todos'], {
 *   query: `query { todos { id title } }`
 * });
 */
export function useGraphQLQuery<T = unknown>(key: string[], body: GraphQLRequest) {
  return useQuery({
    queryKey: key,
    queryFn: async () => {
      const res = await apiClient.post<T>('/graphql', body);
      return res.data;
    },
  });
}


/**
 * Выполнение GraphQL мутации
 *
 * @template T - тип ответа
 * @template V - тип переменных
 * @param query - строка мутации
 * @returns useMutation результат
 *
 * @example
 * const mutation = useGraphQLMutation(`mutation($title: String!) {
 *   addTodo(title: $title) { id title }
 * }`);
 *
 * mutation.mutate({ title: 'New Task' });
 */
export function useGraphQLMutation<T = unknown, V = unknown>(query: string) {
  return useMutation({
    mutationFn: async (variables: V) => {
      const res = await apiClient.post<T>('/graphql', { query, variables });
      return res.data;
    },
  });
}