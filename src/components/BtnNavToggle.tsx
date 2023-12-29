import React from 'react';
import styled from 'styled-components';

const Container = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;

  width: 24px;
  height: 24px;
  margin-top: 4px;
  margin-left: auto;

  position: relative;
  transition: all 0.5s ease-in-out;

  @media (min-width: 400px) {
    width: 28px;
    height: 28px;
  }

  @media (min-width: 900px) {
    display: none;
  }
`;

type MenuIconProps = {
  open: boolean;
};

const MenuIconLineTop = styled.div<MenuIconProps>`
  width: 100%;
  height: 1.5px;
  background: #fff;
  transition: all 0.5s ease-in-out;

  transform: translateY(${props => (props.open ? '100%' : '-500%')})
    rotate(${props => (props.open ? '-45deg' : '0')});
`;

const MenuIconMiddleLine = styled.div<MenuIconProps>`
  display: block;
  width: 100%;
  height: 1.5px;
  background: #fff;
  box-shadow: 0 2px 5px rgba(255, 101, 47, 0.2);
  transition: all 0.5s ease-in-out;
  opacity: 0.65;

  ${props =>
    props.open
      ? 'transform: translateX(18px); background: transparent; box-shadow: none;'
      : ''}
`;

const MenuIconLineBottom = styled.div<MenuIconProps>`
  height: 1.5px;
  background: #fff;
  transition: all 0.5s ease-in-out;
  opacity: ${props => (props.open ? '1' : '0.5')};

  margin-left: auto;

  transform: translateY(${props => (props.open ? '-100%' : '500%')})
    rotate(${props => (props.open ? '45deg' : '0')});
  width: ${props => (props.open ? '100%' : '60%')};
`;

type Props = {
  showNavDialog: boolean;
  setShowNavDialog: (value: boolean) => void;
};

const BtnNavToggle: React.FC<Props> = ({ showNavDialog, setShowNavDialog }) => {
  return (
    <Container onClick={() => setShowNavDialog(!showNavDialog)}>
      <MenuIconLineTop open={showNavDialog} />
      <MenuIconMiddleLine open={showNavDialog} />
      <MenuIconLineBottom open={showNavDialog} />
    </Container>
  );
};

export default BtnNavToggle;
