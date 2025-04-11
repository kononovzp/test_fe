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
    <g clipPath="url(#clip0_485_16186)">
      <circle cx="18" cy="12.5" r="1.5" transform="rotate(90 18 12.5)" fill="#3D1D00" />
      <circle cx="12" cy="12.5" r="1.5" transform="rotate(90 12 12.5)" fill="#3D1D00" />
      <circle cx="6" cy="12.5" r="1.5" transform="rotate(90 6 12.5)" fill="#3D1D00" />
    </g>
    <defs>
      <clipPath id="clip0_485_16186">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
export default Icon;
