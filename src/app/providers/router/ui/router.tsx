import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { PageLoader } from 'widgets/page-loader';

import { routerConfig } from '../config/router-config';

export const Router = () => (
    <Suspense fallback={<PageLoader />}>
        <Routes>
            {Object.values(routerConfig).map(({ path, element }) => (
                <Route
                    key={path}
                    path={path}
                    element={
                        <div className="page">{element}</div>
                    }
                />
            ))}
        </Routes>
    </Suspense>
);
