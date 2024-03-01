import { FC } from 'react';

import { ButtonProps } from './types';
import { cn } from '../../lib';

import styles from './button.module.scss';

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme = 'clear',
        ...otherProps
    } = props;

    return (
        <button
            type="button"
            className={cn(styles.button, className, styles[theme])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
