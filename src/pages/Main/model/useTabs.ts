import { useState } from "react";

/**
 * Хук управления активным табом.
 * @param initial начальный путь (по умолчанию пустая строка)
 * @returns объект { active, setActive }
 */
export function useTabs(initial: string = ''): {
  active: string;
  setActive: (path: string) => void;
} {
  const [active, setActive] = useState<string>(initial);
  return { active, setActive };
}
