import React from 'react';
import styled from 'styled-components';
import ContactContainer from './ContactContainer';
import NavLinks from './NavLinks';

const Container = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 9999;

  padding: 16px 16px 40px 16px;

  background: rgba(0, 0, 0.3);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.7) 0%,
    rgba(0, 0, 0, 0.6) 93%,
    rgba(50, 0, 0, 0) 100%
  );

  display: flex;
  align-items: end;
  justify-content: end;

  @media (min-width: 400px) {
    padding: 20px 20px 60px 20px;
  }

  @media (min-width: 600px) {
    padding: 40px 40px 60px 40px;
  }

  @media (min-width: 900px) {
    flex-direction: column;
    padding-right: 0 !important;
  }

  @media (min-width: 1000px) {
    padding: 80px;
  }
`;

type Props = {
  navDialogRef: React.MutableRefObject<null>;
  setShowNavDialog: (value: boolean) => void;
};

const NavDialog: React.FC<Props> = ({ navDialogRef, setShowNavDialog }) => {
  return (
    <Container ref={navDialogRef} onClick={() => setShowNavDialog(false)}>
      <ContactContainer isDialog={true} />
      <NavLinks isDialog={true} setShowNavDialog={setShowNavDialog} />
    </Container>
  );
};

export default NavDialog;
