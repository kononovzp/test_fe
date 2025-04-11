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
    <g clip-path="url(#clip0_7482_133886)">
      <path
        d="M17.25 4.875L17.25 11.6827C17.25 14.5822 14.8995 16.9327 12 16.9327C9.10051 16.9327 6.75001 14.5822 6.75001 11.6827L6.75 4.875M7.30263 19.125H16.6974"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_7482_133886">
        <rect width="24" height="24" rx="6" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
export default Icon;
