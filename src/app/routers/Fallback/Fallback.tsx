import { FC, ReactElement } from 'react';
import s from './fallback.module.sass';

export const Fallback: FC = (): ReactElement => {

  return (
    <div className={s.fallback} style={{ marginTop: '80rem' }}>
    </div >
  );
};