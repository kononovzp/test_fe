import * as React from 'react';
const Icon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.8334 13.8889H19.1667M12.8334 18.1111H16M15.9696 25.5C10.7229 25.5 6.5 21.1722 6.5 15.952C6.5 10.7318 10.7533 6.5 16 6.5C21.2467 6.5 25.5 10.7318 25.5 15.952C25.5 17.8845 24.9171 19.6815 23.9167 21.1786L25.5 25.5H15.9696Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Icon;
