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
    <path d="M23 12L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M3 12H1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path
      d="M9 12C9 13.6569 7.65685 15 6 15C4.34315 15 3 13.6569 3 12C3 10.3431 4.34315 9 6 9C7.65685 9 9 10.3431 9 12ZM5.00349 12C5.00349 12.5504 5.44964 12.9965 6 12.9965C6.55036 12.9965 6.99651 12.5504 6.99651 12C6.99651 11.4496 6.55036 11.0035 6 11.0035C5.44964 11.0035 5.00349 11.4496 5.00349 12Z"
      fill="currentColor"
    />
  </svg>
);
export default Icon;
