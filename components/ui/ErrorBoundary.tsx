'use client';

import { Component, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
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
    // Log error message so we can diagnose mobile-only crashes
    if (typeof window !== 'undefined') {
      try {
        const msg = `[ErrorBoundary] ${error?.message ?? error} | stack: ${error?.stack?.slice(0, 300)}`;
        console.warn(msg);
        // Store last error in sessionStorage so user can report it
        sessionStorage.setItem('last_app_error', msg);
      } catch {}
    }
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
            <p className="text-zinc-400 mb-6">Please try refreshing the page</p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-cyan-400 text-black font-semibold rounded-lg hover:bg-cyan-300 transition-colors"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
