import React, { SVGProps } from 'react';

const Icon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="16"
    height="17"
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect x="0.5" y="0.869141" width="15" height="15" rx="3.5" fill="currentFill" />
    <rect x="0.5" y="0.869141" width="15" height="15" rx="3.5" stroke="currentStroke" />
    <path
      d="M4.6665 8.96914L6.76174 11.3691L11.9998 5.36914"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Icon;
