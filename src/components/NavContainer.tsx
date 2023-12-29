import React from 'react';
import Header from './Header';
import styled from 'styled-components';
import { useWindowSize } from 'usehooks-ts';
import BtnNavToggle from './BtnNavToggle';
import NavLinks from './NavLinks';

const Container = styled.div`
  padding: 16px;
  display: flex;
  z-index: 99;

  @media (min-width: 400px) {
    padding: 20px;
  }

  @media (min-width: 600px) {
    padding: 40px 40px 0px;
  }

  @media (min-width: 900px) {
    flex-direction: column;
    padding-right: 0 !important;
    padding: 40px 0px 40px 40px;
  }

  @media (min-width: 1000px) {
    padding: 80px 80px 80px 80px;
  }
`;

type Props = {
  showNavDialog: boolean;
  setShowNavDialog: (value: boolean) => void;
};

const NavContainer: React.FC<Props> = ({ showNavDialog, setShowNavDialog }) => {
  const { width } = useWindowSize();

  return (
    <Container>
      <Header />
      {width < 900 ? (
        <BtnNavToggle
          showNavDialog={showNavDialog}
          setShowNavDialog={setShowNavDialog}
        />
      ) : (
        <NavLinks isDialog={false} setShowNavDialog={setShowNavDialog} />
      )}
    </Container>
  );
};

export default NavContainer;
