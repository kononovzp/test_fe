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
      d="M12 16.3846L12 9.80769M4.875 7.06731H6.51923M19.125 7.06731H17.4808M14.7404 7.06731H9.25962M14.7404 7.06731V5.97115C14.7404 5.36576 14.2496 4.875 13.6442 4.875H10.3558C9.75038 4.875 9.25962 5.36576 9.25962 5.97115V7.06731M14.7404 7.06731H17.4808M9.25962 7.06731H6.51923M17.4808 7.06731V16.9327C17.4808 18.1435 16.4992 19.125 15.2885 19.125H8.71154C7.50076 19.125 6.51923 18.1435 6.51923 16.9327V7.06731"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Icon;
