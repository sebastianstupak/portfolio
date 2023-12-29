import React from 'react';
import styled from 'styled-components';
import { EmailIcon, IconWrapper, LinkedInIcon } from './Icons';

type ContainerProp = {
  $isDialog?: boolean;
};

const Container = styled.div<ContainerProp>`
  ${props =>
    props.$isDialog
      ? 'margin: 0 auto -4px -4px; width: 30px;'
      : 'height: 30px; margin-left: -3px;'}

  display: flex;
  flex-direction: ${props => (props.$isDialog ? 'column' : 'row')};
  align-items: center;
  justify-content: ${props => (props.$isDialog ? 'end' : 'start')};
`;

type Props = {
  isDialog: boolean;
};

const ContactContainer: React.FC<Props> = ({ isDialog }) => {
  return (
    <Container $isDialog={isDialog}>
      <IconWrapper
        $width={26}
        $height={26}
        href='mailto:sebastian.stupak@maethril.net'
      >
        <EmailIcon color='#fff' />
      </IconWrapper>
      <IconWrapper
        $width={25}
        $height={25}
        $margin='0 -2px 1px'
        href='https://www.linkedin.com/in/sebastian-stupak/'
        target='_blank'
      >
        <LinkedInIcon color='#fff' />
      </IconWrapper>
      {/*
      <IconWrapper
        $height={23}
        $width={23}
        $margin="0 0 0px"
        href="https://www.instagram.com/sebastian_stupak/"
        target="_blank">
        <InstagramIcon color="#fff" />
      </IconWrapper>
      <IconWrapper
        $height={27}
        $width={27}
        $margin="0 -2px 0px"
        href="https://www.youtube.com/@sebastianstupak"
        target="_blank">
        <YouTubeIcon color="#fff" />
      </IconWrapper>
    */}
    </Container>
  );
};

export default ContactContainer;
