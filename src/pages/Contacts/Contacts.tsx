import { FC, ReactElement } from 'react';
import s from './contacts.module.sass';

export const Contacts: FC = (): ReactElement => {
    return (
        <div className={s.root}>
            <div className={s.head}>
                <div className={s.contact}>
                    <div>
                        <h3 className={s.title_big}>Адрес</h3>
                        <h3 className={s.title}>Москва, Россия</h3>
                    </div>
                </div>
                <div className={s.contact}>
                    <div>
                        <h3 className={s.title_big}>Телефон</h3>
                        <h3 className={s.title}>8 (901) 185 87 91</h3>
                    </div>
                </div>
                <div className={s.contact}>
                    <div>
                        <h3 className={s.title_big}>Почта</h3>
                        <h3 className={s.title}>rikonvald@gmail.com</h3>
                    </div>
                </div>
                <div className={s.contact}>
                    <div>
                        <h3 className={s.title_big}>Телеграм</h3>
                        <h3 className={s.title}>@Rickonvald</h3>
                    </div>
                </div>
            </div>
            <div className={s.form}>

            </div>
        </div>
    );
};