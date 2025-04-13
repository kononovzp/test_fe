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
      d="M9.83647 14.2467L14.2467 9.83646M11.6967 8.01547L13.9491 5.76306C15.1331 4.57898 17.0529 4.57898 18.237 5.76306C19.4211 6.94713 19.4211 8.8669 18.237 10.051L16.4828 11.8051M12.3091 15.9789L10.051 18.237C8.8669 19.4211 6.94713 19.4211 5.76306 18.237C4.57898 17.0529 4.57898 15.1332 5.76306 13.9491L7.90701 11.8051"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Icon;
