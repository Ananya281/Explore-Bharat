// src/components/CurvyDivider.js

import React from 'react';

const CurvyDivider = () => {
  return (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-10">
      <svg
        className="relative block w-full h-[100px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,8 C100,48 200,-12 300,8 C400,58 500,-12 600,8 C700,48 800,-12 900,8 C1000,48 1100,-12 1200,8 L1200,120 L0,120 Z"
          className="fill-current text-white"
        ></path>
      </svg>
    </div>
  );
};

export default CurvyDivider;
