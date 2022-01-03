import React from "react";
import styled from "styled-components";

type ReactionProps = {
  className?: string;
};

export function ReactionSvg({ className }: ReactionProps) {
  return (
    <Icon
      width="22"
      height="22"
      viewBox="0 0 22 22"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_1136_291537)">
        <path d="M18.3767 0C18.7564 0 19.0642 0.307804 19.0642 0.6875V2.42917C19.0642 2.73292 19.3104 2.97917 19.6142 2.97917H21.3132C21.6929 2.97917 22.0007 3.28697 22.0007 3.66667C22.0007 4.04636 21.6929 4.35417 21.3132 4.35417H19.6142C19.3104 4.35417 19.0642 4.60041 19.0642 4.90417V6.64583C19.0642 7.02553 18.7564 7.33333 18.3767 7.33333C17.997 7.33333 17.6892 7.02553 17.6892 6.64583V4.90417C17.6892 4.60041 17.443 4.35417 17.1392 4.35417H15.3526C14.9729 4.35417 14.6651 4.04636 14.6651 3.66667C14.6651 3.28697 14.9729 2.97917 15.3526 2.97917H17.1392C17.443 2.97917 17.6892 2.73292 17.6892 2.42917V0.6875C17.6892 0.307804 17.997 0 18.3767 0Z" />
        <path d="M13.092 2.7009C13.1869 2.40694 13.0511 2.05817 12.7478 1.99964C12.1822 1.89049 11.5981 1.83333 11.0007 1.83333C5.93804 1.83333 1.83398 5.93739 1.83398 11C1.83398 16.0626 5.93804 20.1667 11.0007 20.1667C16.0633 20.1667 20.1673 16.0626 20.1673 11C20.1673 10.4778 20.1237 9.96581 20.0398 9.46746C19.9864 9.1504 19.6165 9.01041 19.3135 9.11795C19.2552 9.13865 19.1959 9.15727 19.1357 9.17371C18.8607 9.24877 18.6561 9.51421 18.6998 9.79585C18.7607 10.1883 18.7923 10.5905 18.7923 11C18.7923 15.3032 15.3039 18.7917 11.0007 18.7917C6.69743 18.7917 3.20898 15.3032 3.20898 11C3.20898 6.69678 6.69743 3.20833 11.0007 3.20833C11.4768 3.20833 11.9429 3.25104 12.3955 3.33283C12.6896 3.38598 12.9716 3.16641 13.0424 2.87609C13.0569 2.81684 13.0735 2.75842 13.092 2.7009Z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.40397 12.2118C5.65446 11.9242 6.04735 11.7708 6.45517 11.835C7.27533 11.9641 8.82139 12.1429 11.0937 12.1429C13.366 12.1429 14.912 11.9641 15.7322 11.835C16.14 11.7708 16.5329 11.9242 16.7834 12.2118C17.0426 12.5093 17.1437 12.9507 16.9535 13.3727C16.3725 14.6619 14.7535 17.1846 11.0937 17.1846C7.43386 17.1846 5.81485 14.6619 5.23388 13.3727C5.04369 12.9507 5.14481 12.5093 5.40397 12.2118ZM7.62413 13.3648C7.24863 13.3289 6.9887 13.7257 7.22435 14.0203C7.94812 14.925 9.15018 15.8096 11.0937 15.8096C13.0372 15.8096 14.2392 14.925 14.963 14.0203C15.1987 13.7257 14.9387 13.3289 14.5632 13.3648C13.6754 13.4498 12.5189 13.5179 11.0937 13.5179C9.66846 13.5179 8.51192 13.4498 7.62413 13.3648Z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.50421 6.45233C6.76214 6.14281 7.22214 6.101 7.53165 6.35892L10.0328 8.44324C10.2688 8.63987 10.3563 8.96322 10.2518 9.25201C10.1472 9.5408 9.87295 9.73318 9.56581 9.73318C8.40917 9.73318 6.72438 10.1077 5.78393 10.6957C5.44231 10.9093 4.99222 10.8055 4.77862 10.4639C4.56503 10.1223 4.66881 9.67217 5.01043 9.45857C5.65306 9.05678 6.49574 8.75255 7.3457 8.55308C7.5168 8.51292 7.57278 8.29242 7.43776 8.1799L6.59761 7.47977C6.2881 7.22185 6.24628 6.76184 6.50421 6.45233Z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.4971 6.45233C15.2392 6.14281 14.7792 6.101 14.4696 6.35892L11.9685 8.44324C11.7325 8.63987 11.645 8.96322 11.7496 9.25201C11.8541 9.5408 12.1284 9.73318 12.4355 9.73318C13.5921 9.73318 15.2769 10.1077 16.2174 10.6957C16.559 10.9093 17.0091 10.8055 17.2227 10.4639C17.4363 10.1223 17.3325 9.67217 16.9909 9.45857C16.3482 9.05678 15.5056 8.75255 14.6556 8.55308C14.4845 8.51292 14.4285 8.29242 14.5635 8.1799L15.4037 7.47977C15.7132 7.22185 15.755 6.76184 15.4971 6.45233Z"
        />
      </g>
    </Icon>
  );
}

const Icon = styled.svg`
  fill: ${({ theme }) => theme.secondary};

  &:hover {
    fill: ${({ theme }) => theme.tertiary};
  }
`;
