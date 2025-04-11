import * as React from 'react';

const Icon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="60"
    height="60"
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_589_35115)">
      <path
        d="M21 41.5508H15C14.4478 41.5508 14 41.9985 14 42.5508V48.5508C14 49.103 14.4478 49.5508 15 49.5508H21C21.5522 49.5508 22 49.103 22 48.5508V42.5508C22 41.9985 21.5522 41.5508 21 41.5508ZM20 47.5508H16V43.5508H20V47.5508Z"
        fill="#3D1D00"
      />
      <path
        d="M35 30.5508H25C23.8955 30.5508 23 31.4463 23 32.5508V36.5508C23 37.6553 23.8955 38.5508 25 38.5508H35C36.1045 38.5508 37 37.6553 37 36.5508V32.5508C37 31.4463 36.1045 30.5508 35 30.5508ZM35 33.5508H31V32.5508H35V33.5508ZM29 32.5508V33.5508H25V32.5508H29ZM25 35.5508H29V36.5508H25V35.5508ZM31 36.5508V35.5508H35V36.5508H31Z"
        fill="#3D1D00"
      />
      <path
        d="M54.9131 50.6182C54.6641 49.3032 53.8984 48.1426 52.7866 47.397C51.6753 46.6509 50.3115 46.3818 49 46.6494V28.9634L50.793 30.7563C52.0117 31.9751 53.9883 31.9751 55.207 30.7563C56.4258 29.5376 56.4258 27.561 55.207 26.3423L52.4141 23.5493H56C57.6567 23.5493 59 22.2061 59 20.5493V8.54932C59 6.89258 57.6567 5.54932 56 5.54932H34.4141L32.1138 3.24951C30.9434 2.0835 29.0508 2.0835 27.8799 3.24951L4.79297 26.3423C3.57422 27.561 3.57422 29.5376 4.79297 30.7563C6.01172 31.9751 7.98828 31.9751 9.20703 30.7563L11 28.9634V49.9312C9.91113 48.668 8.1499 48.2168 6.58789 48.8013C5.02539 49.3853 3.99268 50.8813 4 52.5493C1.79102 52.5493 0 54.3403 0 56.5493C0 57.1016 0.447754 57.5493 1 57.5493H59C59.5522 57.5493 60 57.1016 60 56.5493C59.9961 53.5894 57.8379 51.0728 54.9131 50.6182ZM45.9922 48.5903C45.9922 48.5762 46 48.5645 46 48.5493V42.5493C46 41.9971 45.5522 41.5493 45 41.5493H39C38.4478 41.5493 38 41.9971 38 42.5493V48.5493C38 49.1016 38.4478 49.5493 39 49.5493H45C45.1821 49.5449 45.3594 49.4888 45.5112 49.3882C45.1787 50.0605 45.0039 50.7998 45 51.5493V51.6494C43.0396 52.0537 41.5093 53.5879 41.1099 55.5493H37V40.5493C37 39.9971 36.5522 39.5493 36 39.5493H24C23.4478 39.5493 23 39.9971 23 40.5493V55.5493H16.9111C16.5444 53.4053 15.0488 51.6265 13 50.8975V27.5493H47V47.5752C46.6172 47.8638 46.2778 48.2056 45.9922 48.5903ZM44 43.5493V47.5493H40V43.5493H44ZM53.793 27.7563C54.23 28.1948 54.23 28.9043 53.793 29.3423C53.354 29.7783 52.646 29.7783 52.207 29.3423L46.4141 23.5493H49.5859L53.793 27.7563ZM57 8.54932V20.5493C57 21.1016 56.5522 21.5493 56 21.5493H30C29.4478 21.5493 29 21.1016 29 20.5493V8.54932C29 7.99707 29.4478 7.54932 30 7.54932H56C56.5522 7.54932 57 7.99707 57 8.54932ZM7.79297 29.3423C7.35449 29.7793 6.64551 29.7793 6.20703 29.3423C5.771 28.9038 5.771 28.1953 6.20703 27.7563L29.2998 4.6665C29.6895 4.28125 30.3164 4.28125 30.7061 4.6665L31.5889 5.54932H30C28.3433 5.54932 27 6.89258 27 8.54932V10.1353L7.79297 29.3423ZM27 12.9634V20.5493C27 22.2061 28.3433 23.5493 30 23.5493H43.5859L45.5859 25.5493H14.4141L27 12.9634ZM2.26904 55.5493C2.79541 54.6426 3.93506 54.2988 4.875 54.7632C5.25928 54.9521 5.72119 54.8755 6.02393 54.5728C6.32666 54.2695 6.40234 53.8076 6.21289 53.4233C6.07568 53.1523 6.00293 52.853 6 52.5493C5.99561 51.5737 6.69873 50.7383 7.66113 50.5762C8.62354 50.4141 9.56152 50.9731 9.87695 51.8965C10.0088 52.3188 10.4126 52.5957 10.854 52.5664C10.9033 52.5669 10.9521 52.561 11 52.5493C12.8232 52.5518 14.4155 53.7847 14.874 55.5493H2.26904ZM25 55.5493V41.5493H35V55.5493H25ZM43.1709 55.5493C43.5811 54.3672 44.687 53.5679 45.938 53.5493C45.9722 53.5542 46.0718 53.5654 46.106 53.5664C46.4243 53.5869 46.7319 53.4468 46.9258 53.1934C47.1245 52.9458 47.1938 52.6191 47.1128 52.3125C47.0425 52.064 47.0044 51.8076 47 51.5493C47 49.8926 48.3433 48.5493 50 48.5493C51.6567 48.5493 53 49.8926 53 51.5493C53 52.1016 53.4478 52.5493 54 52.5493C55.8232 52.5518 57.4155 53.7847 57.874 55.5493H43.1709Z"
        fill="#3D1D00"
      />
      <path
        d="M28 44.5508H26V46.5508H27V48.5508H26V50.5508H28C28.5522 50.5508 29 50.103 29 49.5508V45.5508C29 44.9985 28.5522 44.5508 28 44.5508Z"
        fill="#3D1D00"
      />
      <path
        d="M32 19.5508H35C36.1855 19.5562 37.2622 18.8594 37.7432 17.7759C38.2241 16.6924 38.019 15.4268 37.2202 14.5508C38.019 13.6748 38.2241 12.4092 37.7432 11.3257C37.2622 10.2422 36.1855 9.54544 35 9.55081H32C31.4478 9.55081 31 9.99857 31 10.5508V18.5508C31 19.1031 31.4478 19.5508 32 19.5508ZM35 17.5508H33V15.5508H35C35.5522 15.5508 36 15.9986 36 16.5508C36 17.1031 35.5522 17.5508 35 17.5508ZM33 11.5508H35C35.5522 11.5508 36 11.9986 36 12.5508C36 13.1031 35.5522 13.5508 35 13.5508H33V11.5508Z"
        fill="#3D1D00"
      />
      <path
        d="M42 19.5508H43C44.6567 19.5508 46 18.2075 46 16.5508V9.55078H44V16.5508C44 17.103 43.5522 17.5508 43 17.5508H42C41.4478 17.5508 41 17.103 41 16.5508V9.55078H39V16.5508C39 18.2075 40.3433 19.5508 42 19.5508Z"
        fill="#3D1D00"
      />
      <path
        d="M49.9976 19.5503H51.9976V14.8271L54.8545 10.0654L53.1406 9.03516L50.9976 12.6074L48.8545 9.03516L47.1406 10.0654L49.9976 14.8271V19.5503Z"
        fill="#3D1D00"
      />
    </g>
    <defs>
      <clipPath id="clip0_589_35115">
        <rect width="60" height="60" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
export default Icon;
