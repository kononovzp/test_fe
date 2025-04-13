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
    <g clip-path="url(#clip0_7482_133890)">
      <path
        d="M5.25 18.75H12M5.25 14.25H18.75M5.25 5.25H18.75M5.25 9.75H12"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_7482_133890">
        <rect width="24" height="24" rx="6" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
export default Icon;
