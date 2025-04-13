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
      d="M10.5 9.375C10.5 10.2034 9.82843 10.875 9 10.875C8.17157 10.875 7.5 10.2034 7.5 9.375M10.5 9.375C10.5 8.54657 9.82843 7.875 9 7.875C8.17157 7.875 7.5 8.54657 7.5 9.375M10.5 9.375H19.125M7.5 9.375H4.875M13.5 15.375C13.5 14.5466 14.1716 13.875 15 13.875C15.8284 13.875 16.5 14.5466 16.5 15.375M13.5 15.375C13.5 16.2034 14.1716 16.875 15 16.875C15.8284 16.875 16.5 16.2034 16.5 15.375M13.5 15.375L4.875 15.375M16.5 15.375H19.125"
      stroke="currentColor"
      strokeLinecap="round"
    />
  </svg>
);
export default Icon;
