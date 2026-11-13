'use client';

import { Component, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
  errorInfo?: any;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.setState({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      const errorDetails = {
        message: this.state.error?.message || 'Unknown error',
        stack: this.state.error?.stack || 'No stack trace',
        componentStack: this.state.errorInfo?.componentStack || 'No component stack',
      };

      return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
          <div className="text-center max-w-md">
            <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
            <p className="text-zinc-400 mb-6">Please try refreshing the page</p>
            
            <button
              onClick={() => window.location.reload()}
              className="mb-6 px-6 py-3 bg-cyan-400 text-black font-semibold rounded-lg hover:bg-cyan-300 transition-colors"
            >
              Refresh Page
            </button>

            <div className="mt-6 p-4 bg-zinc-900 rounded-lg text-left">
              <h2 className="text-sm font-semibold text-cyan-400 mb-3">Debug Error Info:</h2>
              <div className="space-y-2 text-xs">
                <div>
                  <span className="text-zinc-500">Error:</span>
                  <pre className="text-red-400 mt-1 whitespace-pre-wrap break-all">{errorDetails.message}</pre>
                </div>
                <div>
                  <span className="text-zinc-500">Stack:</span>
                  <pre className="text-zinc-400 mt-1 whitespace-pre-wrap break-all text-[10px]">{errorDetails.stack}</pre>
                </div>
                {errorDetails.componentStack && (
                  <div>
                    <span className="text-zinc-500">Component Stack:</span>
                    <pre className="text-zinc-400 mt-1 whitespace-pre-wrap break-all text-[10px]">{errorDetails.componentStack}</pre>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
