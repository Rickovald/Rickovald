import { FC, ReactElement } from 'react';
import s from './experience.module.sass';

interface IExpirience {
    jobName: string;
    jobTask: string;
    tasks: string[];
};

type IProps = {
    exp: IExpirience;
};
export const Experience: FC<IProps> = ({ exp }): ReactElement => {
    return (
        <div className={s.expirience}>
            <div className={s.lines}>
                <div className={s.circle}></div>
                <div className={s.line}></div>
            </div>
            <div className={s.content}>
                <p className={s.title}>Газпромбанк</p>
                <p className={s.title}>Backend-разработчик</p>
                <p className={s.task}>Доработка системы банка</p>
            </div>
            <div className={s.icon}>
                лого
            </div>
        </div>
    );
};