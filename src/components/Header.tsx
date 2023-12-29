import React from 'react';
import styled from 'styled-components';
import { useWindowSize } from 'usehooks-ts';
import ContactContainer from './ContactContainer';

const Container = styled.header`
  color: white;
  margin-right: 10px;

  @media (min-width: 900) {
    margin-right: 0;
  }
`;

const Name = styled.h1`
  cursor: default;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;

  font-style: bold;
  font-size: 26px;
  line-height: 26px;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.7);

  @media (min-width: 600px) {
    font-size: 42px;
    line-height: 42px;
  }
`;

const Subheading = styled.h2`
  cursor: default;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  opacity: 0.75;

  font-weight: 100;
  font-size: 14px;
  line-height: 16px;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.7);

  @media (min-width: 600px) {
    font-size: 22px;
    line-height: 28px;
  }
`;

const Header = () => {
  const { width } = useWindowSize();

  return (
    <Container>
      <Name>Sebastián Stupák</Name>
      <Subheading>Developer with passion for art</Subheading>
      {width > 900 ? <ContactContainer isDialog={false} /> : null}
    </Container>
  );
};

export default Header;
