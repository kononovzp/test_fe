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
      d="M8.71154 19.125H4.875L4.875 15.281L12.8221 7.31852M8.71154 19.125L19.125 19.125M8.71154 19.125L16.6587 11.1625M12.8221 7.31852L14.4663 5.67111C15.5258 4.60962 17.2435 4.60962 18.3029 5.67111C19.3623 6.73259 19.3623 8.4536 18.3029 9.51508L16.6587 11.1625M12.8221 7.31852L16.6587 11.1625"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Icon;
