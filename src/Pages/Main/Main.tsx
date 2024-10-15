import { FC, ReactElement, useEffect, useState } from 'react';
import s from './main.module.sass';
import about from '../../shared/assets/icons/user.png';
import resume from '../../shared/assets/icons/resume.png';
import portfolio from '../../shared/assets/icons/portfolio.png';
// import blog from '../../shared/assets/icons/blog.png';
import contacts from '../../shared/assets/icons/contacts.png';
import { About } from 'pages/About';
import { Contacts } from 'pages/Contacts';

export const Main: FC = (): ReactElement => {
    const [activeTab, setActiveTab] = useState<string>('');
    const [tabBlock, setTabBlock] = useState<ReactElement | null>();
    const tabs = [
        {
            title: 'Обо мне',
            path: 'about',
            image: about
        },
        {
            title: 'Резюме',
            path: 'resume',
            image: resume
        },
        {
            title: 'Портфолио',
            path: 'portfolio',
            image: portfolio
        },
        // {
        //     title: 'Блог',
        //     path: 'blog',
        //     image: blog
        // },
        {
            title: 'Контакты',
            path: 'contacts',
            image: contacts
        }
    ];
    const returnTab = (path: string) => {
        setActiveTab(path);
        switch (path) {
            case 'about':
                setTabBlock(<About />);
                break;
            // case 'resume':
            //     setTabBlock(<Resume />);
            //     break;
            // case 'portfolio':
            //     setTabBlock(<Portfolio />);
            //     break;
            // case 'blog':
            //     setTabBlock(<Blog />);
            // break;
            case 'contacts':
                setTabBlock(<Contacts />);
                break;
            default:
                setTabBlock(null);
        }
    };
    useEffect(() => {
        console.log(activeTab);
    }, [activeTab]);
    return (
        <div className={s.root}>
            <div className={s.content}>
                <div className={s.iconButton}>
                    <div className={s.icon}></div>
                    <div className={s.text}>Your Text Here</div>
                </div>
                <div className={s.background}>

                </div>
                <div className={s.tabs}>
                    {tabs.map((tab) => (
                        <div
                            onClick={() => returnTab(tab.path)}
                            key={tab.path} className={s.tab}>
                            <img src={tab.image} className={s.prev} />
                            <div
                                className={s.desc}>
                                {tab.title}
                            </div>
                        </div>
                    ))}
                </div>
                <div className={
                    activeTab !== ''
                        ? `${s.tabContent} ${s.active}`
                        : `${s.tabContent}`}>
                    {tabBlock}
                </div>
            </div>
        </div >
    );
};