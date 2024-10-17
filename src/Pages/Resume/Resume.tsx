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

            <h3 className={s.title_big}>Программирование</h3>
            <div className={s.skills}>
                <div className={s.skills__soft}>
                    <LineGraph name={stack.knowledge.title} data={stack.knowledge.data} />
                </div>
                <div className={s.skills__hard}>
                    <LineGraph name={stack.langs.title} data={stack.langs.data} />
                </div>
            </div>
            <h3 className={s.title_big}>Музыка</h3>
            <div className={s.skills}>
                <div className={s.skills__soft}>
                    <LineGraph name={stack.knowledge.title} data={stack.knowledge.data} />
                </div>
                <div className={s.skills__hard}>
                    <LineGraph name={stack.langs.title} data={stack.langs.data} />
                </div>
            </div>
            <div className={s.employment}>
                <h3 className={s.title}>Занятость</h3>
                <div className={s.employment__graph}>
                    <CircleGraph title={'Программирование'} percent={60} />
                    <CircleGraph title={'Музыка'} percent={35} />
                    <CircleGraph title={'Строительство'} percent={5} />
                </div>
            </div>
        </div>
    );
};