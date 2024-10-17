import { FC, ReactElement } from 'react';
import s from './circleGraph.module.sass';

interface ICircleGraph {

};

export const CircleGraph: FC<ICircleGraph> = (): ReactElement => {
    return (
        <div className = { s.circleGraph }>
            circleGraph
        </div>
    );
};