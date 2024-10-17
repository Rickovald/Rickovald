import React, { FC, ReactElement, useEffect, useRef, useState } from 'react';
import s from './respImage.module.sass';
interface MousePosition {
    x: number;
    y: number;
}

type IProps = {
    img: string;
    className: string;
};

export const RespImage: FC<IProps> = ({ img, className }): ReactElement => {
    const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
    const imageRef = useRef<HTMLImageElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - (rect.x + rect.width / 2);
        const y = e.clientY - (rect.y + rect.height / 2);

        setMousePosition({ x, y });
    };
    const handleMouseLeave = () => {
        if (imageRef.current) {
            imageRef.current.classList.add(s.transition);
        }
        setMousePosition({ x: 0, y: 0 });
        setTimeout(() => {
            if (imageRef.current) {
                imageRef.current.classList.remove(s.transition);
            }
        }, 500);
    };
    useEffect(() => {
        if (imageRef.current) {
            const xRotation = (mousePosition.y / window.innerHeight) * 40;
            const yRotation = (mousePosition.x / window.innerWidth) * 80;
            imageRef.current.style.transform = `perspective(1000px) rotateX(${xRotation}deg) rotateY(${yRotation}deg) scale3d(1, 1, 1)`;
        }
    }, [mousePosition]);

    return (
        <div
            className={s.root}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <img
                src={img}
                alt="img"
                className={className}
                ref={imageRef}
            />
        </div>
    );
};