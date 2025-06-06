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
      d="M12.0001 4.875L12.0001 15.8366M12.0001 15.8366L8.71159 12.5481M12.0001 15.8366L15.2886 12.5481M4.875 14.1923V16.9327C4.875 18.1435 5.85654 19.125 7.06732 19.125H16.9328C18.1435 19.125 19.1251 18.1435 19.1251 16.9327V14.1923"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Icon;
