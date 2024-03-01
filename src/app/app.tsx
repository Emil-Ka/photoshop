import { Suspense } from 'react';

import { Navbar } from 'widgets/navbar';
import { Sidebar } from 'widgets/sidebar';

import { Router } from './providers/router';

import './styles/index.scss';

export const App = () => {
    return (
        <div className="app">
            <Suspense fallback="">
                <Navbar className="navbar" />
                <Sidebar className="sidebar" />
                <Router />
            </Suspense>
        </div>
    );
};
