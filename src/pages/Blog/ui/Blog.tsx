import { FC, ReactElement } from 'react';
import s from './blog.module.sass';

export const Blog: FC = (): ReactElement => {

  return (
    <div className={s.blog} style={{ marginTop: '80rem' }}>
      blog
    </div >
  );
};