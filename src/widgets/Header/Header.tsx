import { FC, ReactElement } from 'react';
import s from './header.module.sass';
// import { motion, useScroll, useTransform } from 'framer-motion';
import { NavLink } from 'react-router-dom';

export const Header: FC = (): ReactElement => {
    // const { scrollY } = useScroll();
    // const background = useTransform(
    //     scrollY,
    //     [0, 100],
    //     ['rgba(22, 22, 22, 1)', 'rgba(217, 217, 217, 1)']
    // );
    // // const height = useTransform(scrollY, [0, 100], ['3.125rem', 60]);
    // const color = useTransform(
    //     scrollY,
    //     [0, 100],
    //     ['rgba(211, 210, 219, 1)', 'rgba(39, 39, 39, 1)']);
    return (
        <div
            id="navigation"
            // style={{
            //     background,
            //     // height,
            //     color
            // }}
            className={s.root}>
            <div className={s.wrapper}>
                <NavLink to={'/'} prefetch="intent" className={s.logo}>Rickonvald</NavLink>
                <div className={s.links}>
                    <NavLink to={'/drawer'} prefetch="intent" className={s.logo}>Drawer</NavLink>
                    <NavLink to={'/blog'} prefetch="intent" className={s.logo}>Блог</NavLink>
                    <NavLink to={'/resume'} prefetch="intent" className={s.logo}>Скачать резюме</NavLink>
                </div>
            </div>
        </div>
    );
};