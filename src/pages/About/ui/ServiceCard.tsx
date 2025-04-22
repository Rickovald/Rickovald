import { FC, ReactElement } from 'react';
import s from './serviceCard.module.sass';

type IService = {
    icon: string,
    title: string,
    service: string;
};

interface IServiceCard {
    service: IService;
};

export const ServiceCard: FC<IServiceCard> = ({ service }): ReactElement => {
    return (
        <div className={s.serviceCard}>
            <img className={s.icon} src={service.icon} alt="" />
            <p className={s.title}>
                {service.title}
            </p>
            <p className={s.service}>
                {service.service}
            </p>
        </div>
    );
};