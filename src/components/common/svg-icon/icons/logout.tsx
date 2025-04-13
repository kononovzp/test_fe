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
      d="M9.80769 4.875H7.06731C5.85653 4.875 4.875 5.85653 4.875 7.06731V16.9327C4.875 18.1435 5.85653 19.125 7.06731 19.125H9.80769M8.625 12L19.5865 12M19.5865 12L16.2981 15.2885M19.5865 12L16.2981 8.71154"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Icon;
