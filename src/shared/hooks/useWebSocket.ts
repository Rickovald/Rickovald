import { useEffect, useState } from 'react';

/**
 * Подключение к WebSocket и получение новых данных.
 * 
 * @template T - тип получаемых данных
 * @param url - адрес WebSocket
 * @returns Последние полученные данные
 *
 * @example
 * const message = useWebSocket<Message>('/ws/chat');
 */
export function useWebSocket<T = any>(url: string) {
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    const socket = new WebSocket(url);
    socket.onmessage = (event) => {
      const parsed = JSON.parse(event.data);
      setData(parsed);
    };
    return () => socket.close();
  }, [url]);

  return data;
}
