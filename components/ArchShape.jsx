import React from 'react';

const ArchShape = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
    <defs>
      <pattern id="imgPattern" patternUnits="userSpaceOnUse" width="500" height="500">
        <image href="/archone.jpg" x="0" y="0" width="500" height="500" />
      </pattern>
    </defs>
    <g>
      <path 
        fill="url(#imgPattern)" 
        d="M 50 450 L 450 450 L 450 250 A 200 200 0 0 0 50 250 Z"
        fillOpacity="1"
        fillRule="nonzero"
      />
    </g>
  </svg>
);

export default ArchShape;
