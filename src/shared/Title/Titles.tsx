import { FC, ReactElement } from 'react';
import s from './title.module.sass';

type IProps = {
    title: string;
    ep: string;
};

export const Title: FC<IProps> = ({ title, ep }): ReactElement => {
    return (
        <div
            className={s.title}
        >
            <h2 className={s.title_head}>{title}</h2>
            <span className={s.title_ep}>
                {ep}
            </span>
        </div>
    );
};