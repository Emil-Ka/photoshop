import { Loader } from 'shared/ui';

import styles from './page-loader.module.scss';

export const PageLoader = () => (
    <div className={styles.wrapper}>
        <Loader />
    </div>
);
