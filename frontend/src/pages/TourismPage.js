import React from 'react';
import { useLocation } from 'react-router-dom';

const TourismPage = () => {
  const location = useLocation();
  const predictedClass = location.state?.predictedClass;

  const renderTourismInfo = () => {
    switch (predictedClass) {
      case 0:
        return <p>This is information about Monument A.</p>;
      case 1:
        return <p>This is information about Monument B.</p>;
      case 2:
        return <p>This is information about Monument C.</p>;
      // Add more cases based on the possible classes and respective information
      default:
        return <p>No specific information available for this prediction.</p>;
    }
  };

  return (
    <div>
      <h1>Tourism Information</h1>
      {predictedClass !== undefined ? (
        <div>
          <p>Predicted Class: {predictedClass}</p>
          {renderTourismInfo()}
        </div>
      ) : (
        <p>No prediction data available</p>
      )}
    </div>
  );
};

export default TourismPage;
