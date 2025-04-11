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
    <rect x="1.99756" y="2" width="20" height="20" rx="2" stroke="currentColor" strokeWidth="2" />
    <path
      d="M12.7321 16.2048C12.3362 16.6334 11.6589 16.6334 11.263 16.2048L6.61993 11.1785C6.02828 10.5381 6.48256 9.5 7.35449 9.5L16.6406 9.5C17.5126 9.5 17.9668 10.5381 17.3752 11.1785L12.7321 16.2048Z"
      fill="currentColor"
    />
  </svg>
);
export default Icon;
