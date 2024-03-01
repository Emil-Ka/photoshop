import { Component, ErrorInfo, Suspense } from 'react';

import { PageError } from 'widgets/page-error';

import { ErrorBoundaryProps, ErrorBoundaryState } from './types';

export class ErrorBoundary
    extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { isError: false };
    }

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        console.log('getDerivedStateFromError');
        return { isError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.log(error, errorInfo);
    }

    render() {
        const { isError } = this.state;
        const { children } = this.props;

        if (isError) {
            return (
                <Suspense fallback="">
                    <PageError />
                </Suspense>
            );
        }

        return children;
    }
}
