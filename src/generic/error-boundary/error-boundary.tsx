import React, { Component } from "react";

interface ErrorBoundaryProps {}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: any) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error: any): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.log("Dame errorInfo", errorInfo);
  }

  render() {
    return this.state.hasError ? <h1>Hubo un error</h1> : this.props.children;
  }
}

export default ErrorBoundary;
