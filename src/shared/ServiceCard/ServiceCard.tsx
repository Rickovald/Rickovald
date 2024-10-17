import { FC, ReactElement } from 'react';
import s from './serviceCard.module.sass';

interface IServiceCard {

};

export const ServiceCard: FC<IServiceCard> = (): ReactElement => {
    return (
        <div className = { s.serviceCard }>
            serviceCard
        </div>
    );
};