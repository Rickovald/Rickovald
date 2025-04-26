import { FC, ReactElement } from 'react';
import s from './tabs.module.sass';
import clsx from 'clsx';

interface Tab {
    title: string;
    path: string;
    image: string;
}

interface TabsProps {
    activeTab: string;
    tabs: Tab[];
    returnTab: (path: string) => void;
}

export const Tabs: FC<TabsProps> = ({ activeTab, tabs, returnTab }): ReactElement => {
    return (
        <div className={s.root}>
            {tabs.map((tab) => {
                const isActive = tab.path === activeTab;
                return (
                    <div
                        key={tab.path}
                        onClick={() => returnTab(tab.path)}
                        className={clsx(s.tab, { [s.active]: isActive })}
                    >
                        <img
                            className={s.icon}
                            src={tab.image}
                            alt={tab.title}
                        />
                        <div className={s.desc}>
                            {tab.title}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};