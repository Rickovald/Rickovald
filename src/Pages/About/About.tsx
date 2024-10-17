import { FC, ReactElement } from 'react';
import s from './about.module.sass';
import me from '../../shared/assets/me.jpeg';
import { RespImage } from 'shared/RespImage';

export const About: FC = (): ReactElement => {
    return (
        <div className={s.root}>
            <div className={s.title}>
                <h2 className={s.title_head}>Обо мне</h2>
                <span className={s.title_ep}>
                    Привет привет) Я Рик, программист, музыкант
                    и иногда строитель. Тут я буду выкладывать
                    свои актуальные работы и рассказывать о себе
                </span>
            </div>
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
                            Написать мне
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};