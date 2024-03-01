import { FC } from 'react';

import { Button } from 'shared/ui';
import { cn } from 'shared/lib';

import { PageErrorProps } from './types';

import styles from './page-error.module.scss';

export const PageError: FC<PageErrorProps> = ({ className, ...props }) => {
    const reloadPage = () => location.reload();

    return (
        <div className={cn(styles.wrapper, className)} {...props}>
            <p className={styles.text}>
            </p>
            <Button
                theme="clear"
                onClick={reloadPage}
            >
                Обновить страницу
            </Button>
        </div>
    );
};
