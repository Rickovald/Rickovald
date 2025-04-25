import { useMutation, useQueryClient, MutationOptions } from '@tanstack/react-query';
import { fetcher } from '@/shared/api/fetcher';

type Methods = 'post' | 'put' | 'delete';

interface UseApiMutationOptions<TData, TVariables> extends MutationOptions<TData, Error, TVariables> {
  method: Methods;
  url: string;
  optimisticData?: Partial<TData>;
  rollbackOnError?: boolean;
}
/**
 * Хук для выполнения POST/PUT/DELETE-запросов с поддержкой optimistic UI.
 * 
 * @template TData - тип ответа
 * @template TVariables - тип тела запроса
 * 
 * @param method - HTTP метод
 * @param url - путь запроса
 * @param optimisticData - оптимистичные данные
 * @param rollbackOnError - откат данных при ошибке
 * @param options - дополнительные mutation-опции
 *
 * @example
 * const mutation = useApiMutation({
 *   method: 'post',
 *   url: '/tasks',
 *   optimisticData: { id: 'temp-id', title: '...', completed: false }
 * });
 * mutation.mutate({ title: 'New Task' });
 */
export function useApiMutation<TData = unknown, TVariables = unknown>({
  method,
  url,
  optimisticData,
  rollbackOnError = true,
  ...options
}: UseApiMutationOptions<TData, TVariables>) {
  const queryClient = useQueryClient();

  return useMutation<TData, Error, TVariables>({
    mutationFn: (data) => fetcher<TData>(method, url, data),
    onMutate: async () => {
      if (optimisticData) {
        await queryClient.cancelQueries();
        const previousData = queryClient.getQueryData<TData>([url]);
        queryClient.setQueryData([url], optimisticData);

        return { previousData };
      }
      return {};
    },
    onError: (err, _newData, context: any) => {
      if (rollbackOnError && context?.previousData) {
        queryClient.setQueryData([url], context.previousData);
      }
      return err;
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [url] });
    },
    ...options,
  });
}