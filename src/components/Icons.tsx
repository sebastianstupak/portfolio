/* eslint-disable react/style-prop-object */
import React from 'react';
import styled from 'styled-components';

const IconContainer = styled.svg`
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
`;

type IconProps = {
  color: string;
};

const InstagramIcon: React.FC<IconProps> = ({ color }) => (
  <IconContainer viewBox='-3 -3 30 30' preserveAspectRatio='xMidYMin'>
    <path
      fill={color}
      d='M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z'
    />
  </IconContainer>
);

const LinkedInIcon: React.FC<IconProps> = ({ color }) => (
  <IconContainer viewBox='-3 -3 30 30' preserveAspectRatio='xMidYMin'>
    <path
      fill={color}
      d='M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z'
    />
  </IconContainer>
);

const YouTubeIcon: React.FC<IconProps> = ({ color }) => (
  <IconContainer viewBox='-3 -3 30 30' preserveAspectRatio='xMidYMin'>
    <path
      fill={color}
      d='M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z'
    />
  </IconContainer>
);

const EmailIcon: React.FC<IconProps> = ({ color }) => (
  <IconContainer
    viewBox='-48 -75 311.25 226.155'
    preserveAspectRatio='xMidYMin'
  >
    <path
      fill={color}
      d='m103.75,91.1L207.5,13.01v-4.54c0-4.68-3.79-8.48-8.48-8.48H8.48C3.79,0,0,3.79,0,8.48v4.54l103.75,78.09Z'
    />
    <path
      fill={color}
      d='m109.29,110.01c-1.64,1.24-3.59,1.85-5.54,1.85s-3.9-.62-5.54-1.85L0,36.1v106.2c0,4.68,3.79,8.48,8.48,8.48h190.55c4.68,0,8.48-3.79,8.48-8.48V36.1l-98.21,73.92Z'
    />
  </IconContainer>
);

const SpotifyIcon: React.FC<IconProps> = ({ color }) => (
  <svg viewBox='0 0 496 496' preserveAspectRatio='xMidYMin'>
    <path
      fill={color}
      d='m248,0C111.1,0,0,111.1,0,248s111.1,248,248,248,248-111.1,248-248S384.9,0,248,0Zm100.7,364.9h0c-4.2,0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9,1-9,2.6-11.9,2.6-9.7,0-15.8-7.7-15.8-15.8,0-10.3,6.1-15.2,13.6-16.8,81.9-18.1,165.6-16.5,237,26.2,6.1,3.9,9.7,7.4,9.7,16.5s-7.1,15.4-15.2,15.4Zm26.9-65.6c-5.2,0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8,1.3-7.4,2.6-11.9,2.6-10.7,0-19.4-8.7-19.4-19.4s5.2-17.8,15.5-20.7c27.8-7.8,56.2-13.6,97.8-13.6,64.9,0,127.6,16.1,177,45.5,8.1,4.8,11.3,11,11.3,19.7-.1,10.8-8.5,19.5-19.4,19.5Zm31-76.2h0c-5.2,0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6,1-8.1,2.6-12.9,2.6-13.2,0-23.3-10.3-23.3-23.6s8.4-21.3,17.4-23.9c35.2-10.3,74.6-15.2,117.5-15.2,73,0,149.5,15.2,205.4,47.8,7.8,4.5,12.9,10.7,12.9,22.6,0,13.6-11,23.3-23.2,23.3Z'
    />
  </svg>
);

const AppleIcon: React.FC<IconProps> = ({ color }) => (
  <svg viewBox='0 0 23.93 29.86' preserveAspectRatio='xMidYMin'>
    <path
      fill={color}
      d='m16.24,4.83c-1.06,1.21-2.71,2.26-4.37,2.11-.3-1.81.6-3.62,1.51-4.67,1.06-1.36,2.87-2.26,4.37-2.26.15,1.66-.45,3.47-1.51,4.83h0Zm1.51,2.41c.9,0,3.62.3,5.43,3.02-.15.15-3.17,1.96-3.17,5.73,0,4.52,3.92,6.03,3.92,6.03,0,.15-.6,2.11-1.96,4.22-1.21,1.81-2.56,3.62-4.52,3.62s-2.56-1.21-4.83-1.21-3.02,1.21-4.83,1.21c-1.96,0-3.47-1.96-4.67-3.77C.55,22.32-1.41,15.53,1.31,11.01c1.21-2.26,3.62-3.77,6.03-3.77,1.96,0,3.77,1.36,4.83,1.36,1.06,0,3.17-1.51,5.58-1.36h0Z'
    />
  </svg>
);

type IconWrapperProp = {
  $isDialog?: boolean;
  $width?: number;
  $height?: number;
  $margin?: string;
};

const IconWrapper = styled.a<IconWrapperProp>`
  display: block;
  position: relative;

  width: ${props => (props.$width ? props.$width : '30')}px;
  height: ${props => (props.$height ? props.$height : '30')}px;
  cursor: pointer;

  opacity: ${props => (props.$isDialog ? '0.6' : '0.25')};
  transition: 250ms ease-out;
  backdrop-filter: blur(10px);

  ${props => (props.$margin ? `margin: ${props.$margin};` : '')}

  :hover {
    opacity: ${props => (props.$isDialog ? '0.9' : '0.7')};
  }
`;

export { InstagramIcon };
export { LinkedInIcon };
export { YouTubeIcon };
export { EmailIcon };
export { SpotifyIcon };
export { AppleIcon };
export { IconWrapper };
