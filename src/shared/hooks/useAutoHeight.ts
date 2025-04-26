import { useRef, useState, useLayoutEffect } from 'react';

export function useAutoHeight(
  isOpen: boolean,
  transition = 'height 0.5s ease'
): {
  ref: React.RefObject<HTMLDivElement | null>;
  style: React.CSSProperties;
} {
  // useRef<T | null> yields RefObject<T | null>
  const ref = useRef<HTMLDivElement | null>(null);
  const [height, setHeight] = useState<number>(0);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (isOpen) {
      setHeight(el.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return {
    ref,
    style: {
      height: `${height}px`,
      overflow: 'hidden',
      transition,
    },
  };
}