import * as React from 'react';
const Icon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="24"
    height="25"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18.75 19.25L15.4404 15.9464M15.4404 15.9464C16.5227 14.8656 17.1923 13.3716 17.1923 11.7212C17.1923 8.42338 14.5189 5.75 11.2212 5.75C7.92338 5.75 5.25 8.42338 5.25 11.7212C5.25 15.0189 7.92338 17.6923 11.2212 17.6923C12.8685 17.6923 14.36 17.0252 15.4404 15.9464Z"
      stroke="currentColor"
      strokeWidth="0.75"
      strokeLinecap="round"
    />
  </svg>
);
export default Icon;
