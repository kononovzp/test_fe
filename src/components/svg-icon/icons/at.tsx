import React, { SVGProps } from 'react';

const Icon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15.2885 9.25962V14.4663C15.2885 15.8365 15.8733 16.3846 16.9327 16.3846C18.5769 16.3846 19.125 13.5114 19.125 12C19.125 8.06497 15.935 4.875 12 4.875C8.06497 4.875 4.875 8.06497 4.875 12C4.875 15.935 8.06497 19.125 12 19.125M12 15.2885C10.1838 15.2885 8.71154 13.8162 8.71154 12C8.71154 10.1838 10.1838 8.71154 12 8.71154C13.8162 8.71154 15.2885 10.1838 15.2885 12C15.2885 13.8162 13.8162 15.2885 12 15.2885Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Icon;
