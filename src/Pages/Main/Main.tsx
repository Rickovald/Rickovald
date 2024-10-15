import { FC, ReactElement } from 'react';
import s from './main.module.sass';

export const Main: FC = (): ReactElement => {
    const tabs = [
        {
            title: 'Обо мне',
            path: 'about'
        },
        {
            title: 'Резюме',
            path: 'resume'
        },
        {
            title: 'Портфолио',
            path: 'portfolio'
        },
        {
            title: 'Блог',
            path: 'blog'
        },
        {
            title: 'Контакты',
            path: 'contacts'
        }
    ];
    return (
        <div className={s.root}>
            <div className={s.content}>
                main
                <div className={s.tabs}>
                    {tabs.map((tab) => (
                        <div key={tab.path} className={s.tab}>
                            <div className={s.prev}>
                                i
                            </div>
                            <div
                                className={s.desc}>
                                {tab.title}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    );
};