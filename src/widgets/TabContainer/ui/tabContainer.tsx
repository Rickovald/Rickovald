import { FC, ReactNode } from 'react';
import clsx from 'clsx';
import { useAutoHeight } from '@/shared/hooks/useAutoHeight';
import s from './tabs.module.sass';

interface TabContainerProps {
  isOpen: boolean;
  children: ReactNode;
}

export const TabContainer: FC<TabContainerProps> = ({ isOpen, children }) => {
  const { ref, style } = useAutoHeight(isOpen);

  return (
    <div className={s.tabContainer} ref={ref} style={style}>
      <div className={clsx(s.tabContainer_content, { [s.tabContainer_content_open]: isOpen })}>
        {children}
      </div>
    </div>
  );
};