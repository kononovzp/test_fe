import * as React from 'react';

const Icon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="18"
    height="13"
    viewBox="0 0 18 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M0.5 0.5H17.5M0.5 12.5H17.5M0.5 6.5H17.5" stroke="#3D1D00" strokeLinecap="round" />
  </svg>
);
export default Icon;
