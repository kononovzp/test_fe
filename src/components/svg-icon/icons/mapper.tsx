import * as React from 'react';

const Icon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="16"
    height="20"
    viewBox="-4 -4 24 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15.5 16.5769C15.5 18.1913 14.1569 19.5 12.5 19.5H3.49999C1.84314 19.5 0.499996 18.1913 0.5 16.5769L0.500023 6.34615M6.49998 0.5H5.75001L0.500025 5.61538L0.500023 6.34615M6.49998 0.5H12.5C14.1569 0.5 15.5 1.80871 15.5 3.42308L15.5 6.34615M6.49998 0.5V6.34615H0.500023M14.75 11.4615H6.50001M6.50001 11.4615L9.50001 8.53845M6.50001 11.4615L9.50001 14.3846"
      stroke="#3D1D00"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Icon;
