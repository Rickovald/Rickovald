import { FC, ReactElement, useState } from 'react';
import s from './main.module.sass';
import clsx from 'clsx';
import home from '@/shared/assets/icons/home.svg';
import about from '@/shared/assets/icons/user.svg';
import resume from '@/shared/assets/icons/resume.svg';
import { About } from '@/pages/About';
import { Tabs, TabContainer } from '@/widgets/TabContainer';
import { Resume } from '@/pages/Resume/Resume';
import { useTabs } from '@/pages/Main/model/useTabs';

const tabs = [
    {
        title: 'Обо мне',
        path: 'about',
        image: about
    },
    {
        title: 'Главная',
        path: '',
        image: home
    },
    {
        title: 'Резюме',
        path: 'resume',
        image: resume
    }
];

const ANIMATION_DURATION = 500; // ms, match useAutoHeight default transition

export const Main: FC = (): ReactElement => {
    const { active, setActive } = useTabs();
    const [displayedTab, setDisplayedTab] = useState<string>('');
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleTabChange = (newTab: string) => {
        if (newTab === active) return;
        if (active === '') {
            setIsOpen(false);
            setActive(newTab);
            setDisplayedTab(newTab);
            setIsOpen(!!newTab);
            return;
        }
        // collapse current
        setIsOpen(false);
        // after collapse animation, change content and expand
        setTimeout(() => {
            setActive(newTab);
            setDisplayedTab(newTab);
            setIsOpen(!!newTab);
        }, ANIMATION_DURATION);
    };

    const renderContent = (): ReactElement | null => {
        switch (displayedTab) {
            case 'about':
                return <About />;
            case 'resume':
                return <Resume />;
            default:
                return null;
        }
    };

    return (
        <div className={s.root}>
            <div className={clsx(s.content, { [s.inactive]: !!active })}>
                <div className={s.background} />
                {active === ''
                    ? <div className={s.inwork}>work in progress</div>
                    : null
                }
                <div className={s.tabs}>
                    <Tabs tabs={tabs} activeTab={active} returnTab={handleTabChange} />
                </div>
            </div>


            <TabContainer isOpen={isOpen}>
                {renderContent()}
            </TabContainer>
        </div >
    );
};