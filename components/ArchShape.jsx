import React from 'react';

const ArchShape = ({ imageSrc, width = 800, height = 600 }) => (
    <div style={{ width, height }}>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox={`0 0 ${width} ${height}`}
            width={width}
            height={height}
        >
            <defs>
                <mask id="archMask">
                    <path
                        fill="white"
                        d={`M 0 ${height} L ${width} ${height} L ${width} ${height / 2} A ${width / 2} ${height / 2} 0 0 0 0 ${height / 2} Z`}
                    />
                </mask>
            </defs>

            <image
                href={imageSrc}
                width="100%"
                height="100%"
                preserveAspectRatio="xMidYMid slice"
                mask="url(#archMask)"
            />

            <path
                d={`M 0 ${height} L ${width} ${height} L ${width} ${height / 2} A ${width / 2} ${height / 2} 0 0 0 0 ${height / 2} Z`}
                fill="none"
                stroke="black"
                strokeWidth="2"
            />
        </svg>
    </div>
);

export default ArchShape;