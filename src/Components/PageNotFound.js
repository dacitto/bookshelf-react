import React from "react";
import { Link } from "react-router-dom";
const PageNotFound = () => {
  return (
    <div className="not-found">
      <h1 className="error-404">404</h1>
      <h1 className="text">Page Not Found</h1>
      <Link to="/" className="link">
        Back to Home Page
      </Link>
    </div>
  );
};

export default PageNotFound;
