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
      d="M12 15.9583V11.2083M12 9.22917V8.04167M19.125 12C19.125 15.935 15.935 19.125 12 19.125C8.06497 19.125 4.875 15.935 4.875 12C4.875 8.06497 8.06497 4.875 12 4.875C15.935 4.875 19.125 8.06497 19.125 12Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Icon;
