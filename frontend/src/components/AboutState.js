import React, { useEffect, useState } from 'react';
import aboutPattern from '../assets/images/about.svg'; // Ensure the path and file name are correct

const AboutState = ({ stateName }) => {
  const [summary, setSummary] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStateInfo = async () => {
      try {
        setLoading(true);
        // Format the stateName for Wikipedia API
        const formattedStateName = stateName.split(/(?=[A-Z])/).join(' ');
        const response = await fetch(
          `https://en.wikipedia.org/api/rest_v1/page/summary/${formattedStateName}`
        );

        if (!response.ok) {
          throw new Error('State information not found');
        }

        const data = await response.json();
        setSummary(data.extract);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStateInfo();
  }, [stateName]);

  if (loading) {
    return (
      <section className="relative py-16 bg-[#f3ece4] text-center overflow-hidden">
        <h2 className="text-4xl font-bold text-[#6b4226] mb-8">Loading About {stateName}...</h2>
      </section>
    );
  }

  if (error) {
    return (
      <section className="relative py-16 bg-[#f3ece4] text-center overflow-hidden">
        <h2 className="text-4xl font-bold text-[#6b4226] mb-8">
          Error: Unable to fetch information about {stateName}
        </h2>
      </section>
    );
  }

  return (
    <section className="relative about-state py-16 bg-[#f3ece4] text-center overflow-hidden">
      {/* Decorative Flowers at Various Positions */}
      <div
        className="absolute top-35 left-0 w-40 h-40 opacity-20 bg-no-repeat bg-contain"
        style={{
          backgroundImage: `url(${aboutPattern})`,
          filter:
            'brightness(0) saturate(100%) invert(58%) sepia(31%) saturate(2164%) hue-rotate(2deg) brightness(92%) contrast(89%)',
        }}
      ></div>
      <div
        className="absolute bottom-0 right-20 w-64 h-64 opacity-20 bg-no-repeat bg-contain"
        style={{
          backgroundImage: `url(${aboutPattern})`,
          filter:
            'brightness(0) saturate(100%) invert(58%) sepia(31%) saturate(2164%) hue-rotate(2deg) brightness(92%) contrast(89%)',
        }}
      ></div>
      <div
        className="absolute top-16 right-0 w-40 h-40 opacity-10 bg-no-repeat bg-contain"
        style={{
          backgroundImage: `url(${aboutPattern})`,
          filter:
            'brightness(0) saturate(100%) invert(58%) sepia(31%) saturate(2164%) hue-rotate(2deg) brightness(92%) contrast(89%)',
        }}
      ></div>

      <h2 className="text-4xl font-bold text-[#6b4226] mb-8">About {stateName}</h2>
      <p className="text-lg text-[#8c6239] mb-6 max-w-5xl mx-auto">{summary}</p>
    </section>
  );
};

export default AboutState;
