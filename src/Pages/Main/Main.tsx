import { FC, ReactElement, useEffect, useRef, useState } from 'react';
import s from './main.module.sass';
import home from '../../shared/assets/icons/home.svg';
import about from '../../shared/assets/icons/user.svg';
import resume from '../../shared/assets/icons/resume.svg';
import portfolio from '../../shared/assets/icons/portfolio.svg';
import blog from '../../shared/assets/icons/blog.svg';
import contacts from '../../shared/assets/icons/contacts.svg';
import { About } from 'pages/About';
import { Contacts } from 'pages/Contacts';
import { Tabs } from 'shared/Tabs';

export const Main: FC = (): ReactElement => {
    const [activeTab, setActiveTab] = useState<string>('');
    const [tabBlock, setTabBlock] = useState<ReactElement | null>();
    const [isTabBlockOpen, setIsTabBlockOpen] = useState(false);

    const tabs = [
        {
            title: 'Главная',
            path: '',
            image: home
        },
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
        {
            title: 'Блог',
            path: 'blog',
            image: blog
        },
        {
            title: 'Контакты',
            path: 'contacts',
            image: contacts
        }
    ];
    const handleTabChange = (activeTab: string, children: ReactElement | null) => {
        setIsTabBlockOpen(false);
        if (activeTab !== '') {
            setTimeout(() => {
                setTabBlock(children);
                setIsTabBlockOpen(true);
            }, 500);
        }
    };
    const tabContentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (tabContentRef.current) {
            const childBlock = tabContentRef.current.children[0];
            if (isTabBlockOpen) {
                // tabContentRef.current.style.height = `${childBlock.scrollHeight}px`;
                tabContentRef.current.style.height = `${childBlock?.scrollHeight}px`;
                tabContentRef.current.style.margin = '3.75rem 0';
            } else {
                tabContentRef.current.style.margin = '0';
                tabContentRef.current.style.height = '0px';
            }
        }
    }, [isTabBlockOpen]);
    const activeTabHandler = (activeTab: string) => {
        switch (activeTab) {
            case 'about':
                handleTabChange(activeTab, <About />);
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
                handleTabChange(activeTab, <Contacts />);
                break;
            default:
                handleTabChange('', null);
        }
        setActiveTab(activeTab);
    };

    // }, [activeTab]);
    return (
        <div className={
            activeTab !== ''
                ? `${s.root} ${s.root_inactive}`
                : `${s.root}`}
        >
            <div className={activeTab !== ''
                ? `${s.content} ${s.inactive}`
                : `${s.content}`}>
                <div className={s.background}>
                </div>
                <div className={s.tabs}>
                    <Tabs tabs={tabs} returnTab={activeTabHandler} />
                </div>
                {/* <div className={s.tabs}>
                    {tabs.map((tab) => (
                        <div
                            onClick={() => returnTab(tab.path)}
                            key={tab.path} className={s.tab}>
                            <div className={s.tab_content}>
                                <div
                                    className={s.desc}>
                                    {tab.title}
                                </div>
                            </div>

                        </div>
                    ))}
                </div> */}
            </div>
            <div className={s.tab} ref={tabContentRef}>
                {tabBlock && (
                    <div
                        className={`${s.tab_content} ${isTabBlockOpen ? s.tab_content_open : ''}`}
                    >
                        {tabBlock}
                    </div>
                )}
            </div>
        </div >
    );
};