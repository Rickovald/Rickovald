import { FC, ReactElement, useCallback, useEffect, useRef, useState } from 'react';
import s from './circleGraph.module.sass';
import { useInView } from 'react-intersection-observer';

type IProps = {
    percent: number;
};

export const CircleGraph: FC<IProps> = ({ percent }): ReactElement => {
    const [percentFill, setPercentFill] = useState(0);
    const { ref, inView } = useInView({
        triggerOnce: true
        // rootMargin: '-100px 0px'
    });
    const percentFillRef = useRef(percentFill);
    const filler = useCallback((percent: number) => {
        const intervalId = setInterval(() => {
            if (percentFillRef.current < percent) {
                setPercentFill(percentFillRef.current + 1);
                percentFillRef.current = percentFillRef.current + 1;
            } else {
                clearInterval(intervalId);
            }
        }, 10);
    }, [percent]);

    useEffect(() => {
        if (inView) {
            filler(percent);
            // 0.5 секунды / 100 шагов = 5 мс
        }
    }, [inView]);
    return (
        <div ref={ref} className={s.chart}
            style={{
                height: ref.prototype?.clientWidth + 'px',
                background: `
                    conic-gradient(
                        #6132b8 ${percentFill}%,
                        #82809a ${percentFill - 100}%)`
            }}
        >
            <div className={s.back} />
        </div >
    );
};