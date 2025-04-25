import { FC, ReactElement } from 'react';
import s from './progress.module.sass';
import { useInView } from 'react-intersection-observer';

type IProps = {
    level: number;
};

export const Progress: FC<IProps> = ({ level }): ReactElement => {
    const { ref, inView } = useInView({
        triggerOnce: true
    });
    return (
        <div ref={ref}>
            <div className={s.progress}>
                <div
                    className={s.progress_fill}
                    style={!inView
                        ? {
                            width: '0%'
                        }
                        : {
                            width: `${level / 10 * 100}%`
                        }}
                />
            </div>
            <div className={s.levels}>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
            </div>
        </div>
    );
};