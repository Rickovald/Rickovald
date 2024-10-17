import { FC, ReactElement } from 'react';
import s from './resume.module.sass';

interface IResume {

};

export const Resume: FC<IResume> = (): ReactElement => {
    return (
        <div className = { s.resume }>
            resume
        </div>
    );
};