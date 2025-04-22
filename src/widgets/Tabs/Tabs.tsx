import { FC, ReactElement } from 'react';
import s from './tabs.module.sass';

type ITab = {
    title: string;
    path: string;
    image: string;
};
type IProps = {
    activeTab: string;
    tabs: ITab[];
    returnTab: (path: string) => void;
};

export const Tabs: FC<IProps> = ({ activeTab, tabs, returnTab }): ReactElement => {
    return (
        <div className={s.root}>
            {tabs.map((tab) => (
                <div
                    onClick={() => {
                        returnTab(tab.path);
                    }}
                    key={tab.path}
                    className={
                        tab.path === activeTab
                            ? `${s.tab} ${s.active}`
                            : s.tab
                    }
                >
                    <div className={`${s.content} ${tab.path}`}>
                        <img className={s.icon} src={tab.image} alt="" />
                        <div
                            className={s.desc}>
                            {tab.title}
                        </div>
                    </div>

                </div>
            ))}
        </div>
    );
};