import React from 'react';
import { useLocation } from 'react-router-dom';
import Welcome from '../components/Welcome';
import History from '../components/History';
import Culture from '../components/Culture';
import PlacesToVisit from '../components/PlacesToVisit';

const TourismPage = () => {
  const location = useLocation();
  const predictedClass = location.state?.predictedClass || "Unknown Place";

  console.log("Received Predicted Class in TourismPage:", predictedClass);

  return (
    <div className="tourism-page">
      <Welcome placeName={predictedClass} />
      {/* Pass predictedClass as stateName for History */}
      <History stateName={predictedClass} />
      <Culture stateName={predictedClass} />
      <PlacesToVisit placeName={predictedClass} />
    </div>
  );
};

export default TourismPage;
