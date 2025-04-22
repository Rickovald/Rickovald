import { FC, ReactElement } from 'react';
import s from './auth.module.sass';


export const Auth: FC = (): ReactElement => {
    return (
        <div className = { s.auth }>
            auth
        </div>
    );
};