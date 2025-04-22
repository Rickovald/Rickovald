import { FC, ReactElement } from 'react';
import s from './search.module.sass';

export const Search: FC = (): ReactElement => {
    return (
        <div className = { s.search }>
            search
        </div>
    );
};