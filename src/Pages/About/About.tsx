import { FC, ReactElement } from 'react';
import s from './about.module.sass';
import me from '../../shared/assets/me.jpeg';
import { RespImage } from 'shared/RespImage';
import { Title } from 'shared/Title';
import { ServiceCard } from 'shared/ServiceCard';
import { services } from './services';

export const About: FC = (): ReactElement => {
    return (
        <div className={s.root}>
            <Title
                title="Обо мне"
                ep="Привет привет) Я Рик, программист,
                    музыкант и иногда строитель. Тут я буду
                    выкладывать свои актуальные
                    и рассказывать о себе" />

            <div className={s.content}>
                <div className={s.about}>
                    <RespImage img={me} className={s.about_img} />
                    {/* <img className={s.about_img} src={me} alt="me" /> */}
                    <div className={s.about_text}>
                        <p className={s.about_right}>Алексей Риконвальд</p>
                        <p className={s.about_right}>rikonvald@gmail.com</p>
                        <p className={s.about_right}>8 (901) 185-87-91</p>
                        <p className={s.about_right}>Москва, Россия</p>

                        <a className={s.about_link}
                            href="https://t.me/Rickonvald"
                            target='_blank' rel="noreferrer"
                        >
                            <svg>
                                <rect x="0" y="0" fill="none" width="100%" height="100%" />
                            </svg>
                            Написать мне
                        </a>
                    </div>
                </div>
                <div className={s.services}>
                    <Title
                        title="Услуги"
                        ep="" />
                    <div className={s.services_list}>
                        {services.map((service) => (
                            <ServiceCard key={service.id} service={service} />
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
};