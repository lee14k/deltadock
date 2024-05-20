import React from 'react';

const ArchShape = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 491.887 491.887">
    <defs>
      <clipPath id="clip1">
        <path d="M0 0h491.887v491.887H0z"/>
      </clipPath>
      <pattern id="imgPattern" patternUnits="userSpaceOnUse" width="491.887" height="491.887">
        <image href="/archone.jpg" x="0" y="0" width="491.887" height="491.887" />
      </pattern>
    </defs>
    <g clipPath="url(#clip1)">
      <path 
        fill="url(#imgPattern)" 
        d="M 88.828125 133.28125 L 403.058594 133.28125 L 403.058594 478.457031 L 88.828125 478.457031 Z M 88.828125 133.28125"
        fillOpacity="1"
        fillRule="nonzero"
      />
    </g>
  </svg>
);

export default ArchShape;
