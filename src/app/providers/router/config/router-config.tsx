import { RouteProps } from 'react-router-dom';

import { Routes } from 'shared/config';
import { MainPage, NotFound } from 'pages';

export const routerConfig: Record<Routes, RouteProps> = {
    [Routes.MAIN]: {
        path: Routes.MAIN,
        element: <MainPage />,
    },
    [Routes.NOT_FOUND]: {
        path: Routes.NOT_FOUND,
        element: <NotFound />,
    },
};
