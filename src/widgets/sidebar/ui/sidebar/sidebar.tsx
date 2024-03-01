import { FC, useState } from 'react';

import { cn } from 'shared/lib';

import { SidebarProps } from './types';

import styles from './sidebar.module.scss';

export const Sidebar: FC<SidebarProps> = ({ className, ...props }) => {
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

    const toggleIsCollapsed = () => {
        setIsCollapsed((isCollapsed) => !isCollapsed);
    };

    return (
        <div
            className={cn(
                styles.sidebar,
                className,
                { [styles.collapsed]: isCollapsed }
            )}
            {...props}
        >
            <button type="button" onClick={toggleIsCollapsed}>
                toggle
            </button>
        </div>
    );
};
