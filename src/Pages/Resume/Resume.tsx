import { FC, ReactElement } from 'react';
import s from './resume.module.sass';
import { Title } from 'shared/Title';
import { Experience } from 'shared/Expirience';
import { exp } from './exp';
interface IResume {

};

export const Resume: FC<IResume> = (): ReactElement => {
    return (
        <div className={s.resume}>
            <Title title="Резюме" ep="Мой опыт работы" />
            <div className={s.experience}>
                <div className={s.jobs}>
                    {exp.map((exp) => (
                        <Experience exp={exp} key={exp.id} />
                    ))}
                </div>
                <div className={s.study}>
                    {exp.map((exp) => (
                        <Experience exp={exp} key={exp.id} />
                    ))}
                </div>
            </div>
        </div>
    );
};