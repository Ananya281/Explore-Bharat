import React from 'react';

const FestivalVideo = ({ videoSrc, title }) => {
  return (
    <div className="max-w-6xl mx-auto p-8">
      <h2 className="text-3xl font-bold text-center text-[#6b4226] mb-6">{title}</h2>
      <video controls className="w-full rounded-lg shadow-lg">
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default FestivalVideo;
