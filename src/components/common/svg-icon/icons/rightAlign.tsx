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
    <g clip-path="url(#clip0_7482_133891)">
      <path
        d="M18.75 14.25H5.25M18.75 5.25H5.25M15.6818 18.75H8.93182M15.6818 9.75H8.93182"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_7482_133891">
        <rect width="24" height="24" rx="6" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
export default Icon;
