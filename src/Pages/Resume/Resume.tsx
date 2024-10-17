import { FC, ReactElement } from 'react';
import s from './resume.module.sass';
import { Title } from 'shared/Title';
import { Experience } from 'shared/Expirience';
import { exp, stack } from './exp';
import { CircleGraph } from 'widgets/CircleGraph';
import { LineGraph } from 'widgets/LineGraph';
interface IResume {

};

export const Resume: FC<IResume> = (): ReactElement => {
    return (
        <div className={s.resume}>
            <Title title="Резюме" ep="Места работы и задачи на должности" />
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

            <Title title="Навыки" ep="Стек, хард скилы и софт скилы" />
            <div className={s.skills}>
                <div className={s.skills__hard}>
                    <CircleGraph percent={75} />
                </div>
                <div className={s.skills__soft}>
                    <LineGraph name={stack.langs.title} data={stack.langs.data} />
                </div>
            </div>
            <div className={s.skills}>
                <div className={s.skills__hard}>
                    <LineGraph name={stack.knowledge.title} data={stack.knowledge.data} />
                </div>
                <div className={s.skills__soft}>
                    <CircleGraph percent={25} />
                </div>
            </div>
        </div>
    );
};