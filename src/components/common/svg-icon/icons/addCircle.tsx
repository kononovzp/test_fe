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
    <g clipPath="url(#clip0_1_107)">
      <path
        d="M17.3333 9.33335H14.6667V14.6667H9.33332V17.3334H14.6667V22.6667H17.3333V17.3334H22.6667V14.6667H17.3333V9.33335ZM16 2.66669C8.63999 2.66669 2.66666 8.64002 2.66666 16C2.66666 23.36 8.63999 29.3334 16 29.3334C23.36 29.3334 29.3333 23.36 29.3333 16C29.3333 8.64002 23.36 2.66669 16 2.66669ZM16 26.6667C10.12 26.6667 5.33332 21.88 5.33332 16C5.33332 10.12 10.12 5.33335 16 5.33335C21.88 5.33335 26.6667 10.12 26.6667 16C26.6667 21.88 21.88 26.6667 16 26.6667Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_1_107">
        <rect width="32" height="32" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default Icon;
