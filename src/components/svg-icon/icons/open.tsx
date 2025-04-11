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
    <path
      d="M9 14.9945L19.125 4.87503M19.125 4.87503V11.0466M19.125 4.87503L12.9534 4.875"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19.125 14.625V17.125C19.125 18.2296 18.2296 19.125 17.125 19.125H6.875C5.77043 19.125 4.875 18.2296 4.875 17.125V6.875C4.875 5.77043 5.77043 4.875 6.875 4.875H9.375"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Icon;
