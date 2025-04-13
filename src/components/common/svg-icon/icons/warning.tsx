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
      d="M12 15.75V16.275M12 9V13.9125M4.875 12.75C4.875 16.685 8.06497 19.875 12 19.875C15.935 19.875 19.125 16.685 19.125 12.75C19.125 8.81497 15.935 5.625 12 5.625C8.06497 5.625 4.875 8.81497 4.875 12.75Z"
      stroke="currentColor"
      strokeLinecap="round"
    />
  </svg>
);
export default Icon;
