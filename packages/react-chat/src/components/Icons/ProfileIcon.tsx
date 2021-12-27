import React from "react";
import styled from "styled-components";

type ProfileSvgProps = {
  width: number;
  height: number;
  className?: string;
};

export function ProfileSvg({ width, height, className }: ProfileSvgProps) {
  return (
    <Icon
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.00065 8.66732C9.28932 8.66732 10.334 7.62265 10.334 6.33398C10.334 5.04532 9.28932 4.00065 8.00065 4.00065C6.71199 4.00065 5.66732 5.04532 5.66732 6.33398C5.66732 7.62265 6.71199 8.66732 8.00065 8.66732ZM8.00065 7.66732C8.73703 7.66732 9.33398 7.07036 9.33398 6.33398C9.33398 5.5976 8.73703 5.00065 8.00065 5.00065C7.26427 5.00065 6.66732 5.5976 6.66732 6.33398C6.66732 7.07036 7.26427 7.66732 8.00065 7.66732Z"
      />
      <path d="M10.965 10.8494C11.2086 11.0388 11.2153 11.3976 10.9778 11.5946C10.7747 11.763 10.4827 11.734 10.2702 11.5777C9.63485 11.1102 8.85006 10.834 8.00075 10.834C7.15145 10.834 6.36666 11.1102 5.7313 11.5777C5.51884 11.734 5.22678 11.763 5.02374 11.5946C4.78617 11.3976 4.79289 11.0388 5.03654 10.8494C5.85506 10.213 6.88365 9.83398 8.00075 9.83398C9.11786 9.83398 10.1465 10.213 10.965 10.8494Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.00065 14.6673C11.6825 14.6673 14.6673 11.6825 14.6673 8.00065C14.6673 4.31875 11.6825 1.33398 8.00065 1.33398C4.31875 1.33398 1.33398 4.31875 1.33398 8.00065C1.33398 11.6825 4.31875 14.6673 8.00065 14.6673ZM8.00065 13.6673C11.1303 13.6673 13.6673 11.1303 13.6673 8.00065C13.6673 4.87104 11.1303 2.33398 8.00065 2.33398C4.87104 2.33398 2.33398 4.87104 2.33398 8.00065C2.33398 11.1303 4.87104 13.6673 8.00065 13.6673Z"
      />
    </Icon>
  );
}

export const ProfileIcon = () => {
  return <Icon width={16} height={16} />;
};

const Icon = styled.svg`
  fill: ${({ theme }) => theme.tertiary};

  &:hover {
    fill: ${({ theme }) => theme.bodyBackgroundColor};
  }
`;
