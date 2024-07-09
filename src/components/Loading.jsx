import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner-container flex flex-col">
      <div className="loading-spinner"></div>
      <div className="text-yellow-600">Please Wait</div>
    </div>
  );
};

export default LoadingSpinner;
