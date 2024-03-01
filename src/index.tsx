import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { App } from 'app/app';
import { ErrorBoundary } from 'app/providers/error-boundary';

const root = document.getElementById('root');

render(
    <BrowserRouter>
        <ErrorBoundary>
            <App />
        </ErrorBoundary>
    </BrowserRouter>,
    root,
);
