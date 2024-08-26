import React from 'react';

const ArchShape = ({ imageSrc }) => (
    <div className="w-full">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 3000 3000"
            className="w-full h-auto"
        >
            <defs>
                <pattern
                    id="imgPattern"
                    patternUnits="objectBoundingBox"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                >
                    <image
                        href={imageSrc}
                        preserveAspectRatio="xMidYMid slice"
                        width="1"
                        height="1"
                        x="0"
                        y="0"
                    />
                </pattern>
            </defs>
            <g>
                <path
                    fill="url(#imgPattern)"
                    d="M 300 2700 L 2700 2700 L 2700 1650 A 1200 1200 0 0 0 300 1650 Z"
                    fillOpacity="1"
                    fillRule="nonzero"
                    stroke="#000000"
                    strokeWidth="15"
                />
            </g>
        </svg>
    </div>
);

export default ArchShape;