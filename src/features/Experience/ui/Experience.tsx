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
                <p className={s.title_big}>{exp.jobName}</p>
                <p className={s.title}>{exp.jobTask}</p>
                {exp.tasks.map((data) => (
                    <div
                        key={data}
                        className={s.task}
                    >
                        {data}
                    </div>
                ))}

            </div>
            <div className={s.icon}>
                лого
            </div>
        </div>
    );
};