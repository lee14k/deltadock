import React from 'react';

const ArchShape = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="1000" height="1000">
    <defs>
      <pattern id="imgPattern" patternUnits="userSpaceOnUse" width="1000" height="1000">
        <image href="/archone.jpg" x="0" y="0" width="1000" height="1000" />
      </pattern>
    </defs>
    <g>
      <path 
        fill="url(#imgPattern)" 
        d="M 100 900 L 900 900 L 900 550 A 400 400 0 0 0 100 550 Z"
        fillOpacity="1"
        fillRule="nonzero"
      />
    </g>
  </svg>
);

export default ArchShape;
