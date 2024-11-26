import React from 'react';

const ArtVideo = ({ videoSrc }) => {
  return (
    <div className="mt-12 max-w-6xl mx-auto p-8">
      <h2 className="text-3xl font-semibold text-center text-[#6b4226] mb-6">Explore the Art</h2>
      <video className="w-full rounded-lg shadow-lg" controls>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default ArtVideo;
