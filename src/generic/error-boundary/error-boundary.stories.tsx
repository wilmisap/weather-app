import React from "react";
import "typeface-roboto";
import ErrorBoundary from "./error-boundary";

export default {
  title: "ErrorBoundary",
  component: ErrorBoundary,
};

const prop: any = undefined
const ComponentWithoutError = () => <h1>Sin error</h1>;
const ComponentWithError = () => <h1>{prop.hola}</h1>;

export const ErrorBoundaryWithError = () => (
  <ErrorBoundary>
    <ComponentWithError />
  </ErrorBoundary>
);

export const ErrorBoundaryWithoutError = () => (
  <ErrorBoundary>
    <ComponentWithoutError />
  </ErrorBoundary>
);
