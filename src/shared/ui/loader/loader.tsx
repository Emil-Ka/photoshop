import { FC } from 'react';

import { LoaderProps } from './types';
import { cn } from '../../lib';

import styles from './loader.module.scss';

export const Loader: FC<LoaderProps> = ({ className, ...props }) => (
    <div className={cn(styles.loader, className)} {...props} />
);
