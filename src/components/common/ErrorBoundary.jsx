import { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.error('ErrorBoundary caught:', error, info);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div
                    className="min-h-[200px] flex items-center justify-center"
                    style={{ color: 'var(--palette-text-muted)' }}
                >
                    <div className="text-center p-8">
                        <p className="text-lg font-medium mb-2">Something went wrong</p>
                        <button
                            onClick={() => this.setState({ hasError: false })}
                            className="px-4 py-2 rounded-lg text-sm font-medium"
                            style={{
                                background: 'var(--palette-primary-main)',
                                color: 'var(--palette-primary-contrastText)',
                            }}
                        >
                            Try again
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
