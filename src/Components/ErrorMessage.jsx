// src/components/ErrorMessage.jsx

import React from "react";
import "../style.css"; // Go one directory up to access the style.css

const ErrorMessage = ({ message }) => {
  return (
    <div className="error-message">
      <strong>Error:</strong> {message}
    </div>
  );
};

export default ErrorMessage;
