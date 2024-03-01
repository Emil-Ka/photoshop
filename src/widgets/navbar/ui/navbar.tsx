import { FC } from 'react';

import { cn } from 'shared/lib';

import { NavbarProps } from './types';

import styles from './navbar.module.scss';

export const Navbar: FC<NavbarProps> = ({ className }) => (
    <nav className={cn(styles.navbar, className)}>
    </nav>
);
