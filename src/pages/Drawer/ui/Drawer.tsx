import { FC, MouseEvent, ReactElement, useRef, useState } from 'react';
import s from './drawer.module.sass';

type Cords = {
  x: number;
  y: number;
};

export const Drawer: FC = (): ReactElement => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [previousCoords, setPreviousCoords] = useState<Cords | null>(null);

  // Функция для ограничения координат в пределах канваса
  const getClampedCoords = (coords: Cords): Cords => {
    if (!canvasRef.current) return coords;
    const rect = canvasRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    return {
      x: Math.max(0, Math.min(coords.x, width)), // Ограничиваем по X
      y: Math.max(0, Math.min(coords.y, height)), // Ограничиваем по Y
    };
  };

  const markCanvas = (event: MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing || canvasRef.current === null) return;
    const rect = canvasRef.current.getBoundingClientRect();

    const coords = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };

    const clampedCoords = getClampedCoords(coords); // Применяем ограничения

    const canvasContext = canvasRef.current.getContext('2d') as CanvasRenderingContext2D;
    canvasContext.beginPath();
    if (previousCoords) {
      canvasContext.moveTo(previousCoords.x, previousCoords.y);
      canvasContext.lineTo(clampedCoords.x, clampedCoords.y);
    }
    canvasContext.stroke();
    setPreviousCoords(clampedCoords); // Обновляем координаты с учетом ограничений
  };

  return (
    <div className={s.drawer} style={{ marginTop: '80rem' }} ref={rootRef}>
      <canvas
        width={'500rem'}
        height={'500rem'}
        ref={canvasRef}
        className={s.canvas}
        onMouseMove={(event) => markCanvas(event)}
        onMouseDown={() => setIsDrawing(true)}
        onMouseUp={() => {
          setIsDrawing(false);
          setPreviousCoords(null); // Сбрасываем предыдущие координаты при отпускании кнопки
        }}></canvas>
    </div>
  );
};
