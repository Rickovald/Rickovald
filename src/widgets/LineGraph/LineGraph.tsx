import { FC, ReactElement } from 'react';
import s from './lineGraph.module.sass';
import { Progress } from 'shared/Progress';

interface ILineGraph {
    id: number,
    skill: string,
    level: number;
};

type IProps = {
    name: string;
    data: ILineGraph[];
};

export const LineGraph: FC<IProps> = ({ name, data }): ReactElement => {
    const dataSort = data.sort((a, b) => b.level - a.level);
    return (
        <div className={s.lineGraph}>
            {name}
            {dataSort.map((data) => (
                <div
                    key={data.id}
                    className={s.line}
                // style={{
                //     width: `${data.level}%`
                // }}
                >
                    {data.skill}
                    <Progress level={data.level} />
                </div>
            ))}
        </div>
    );
};