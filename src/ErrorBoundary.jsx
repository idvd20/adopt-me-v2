import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, info) {
    // typically you will want to log the error to an error reporting service such as Sentry or LogRocket or TraackJS or NewRelic
    console.log("ErrorBoundary caught an error", error, info);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <h2>
          There was an error with this listing.{" "}
          <Link to="/">Click here to go back to the home page</Link>{" "}
        </h2>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
