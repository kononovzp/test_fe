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
      d="M6.2945 9.07748L16.9789 5.3739C18.0453 5.00427 19.0883 5.9836 18.7865 7.07109L15.8103 17.7944C15.4788 18.9889 13.8728 19.195 13.2505 18.1228L10.9401 14.1426C10.7949 13.8924 10.5758 13.6934 10.3128 13.5728L6.16947 11.6728C5.02231 11.1468 5.10209 9.49081 6.2945 9.07748Z"
      stroke="currentColor"
    />
  </svg>
);
export default Icon;
