import * as React from 'react';

const Icon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_4035_104481)">
      <circle cx="12.5" cy="6" r="1.5" fill="#3D1D00" />
      <circle cx="12.5" cy="12" r="1.5" fill="#3D1D00" />
      <circle cx="12.5" cy="18" r="1.5" fill="#3D1D00" />
    </g>
    <defs>
      <clipPath id="clip0_4035_104481">
        <rect width="24" height="24" fill="white" transform="matrix(0 -1 1 0 0 24)" />
      </clipPath>
    </defs>
  </svg>
);
export default Icon;
