import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

type NavLinksProp = {
  $isDialog?: boolean;
};

const NavLinksWrapper = styled.nav<NavLinksProp>`
  display: flex;
  flex-direction: column;
  text-align: ${props => (props.$isDialog ? 'right' : 'left')};
`;

type NavLinkProp = {
  selected: boolean;
  $isDialog?: boolean;
};

const NavLink = styled(Link)<NavLinkProp>`
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;

  opacity: 0.8;
  transition: 250ms ease-out;

  :hover {
    opacity: 1;
  }

  color: white;
  font-size: ${props => (props.$isDialog ? '24px' : '18px')};
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.7);
  font-weight: ${props => (props.selected ? '600' : '300')};
  text-decoration: ${props =>
    props.$isDialog && props.selected ? 'underline' : 'none'};
`;

const NavLinksContainer = styled.div`
  display: flex;
  margin-top: auto;
  margin-left: -20px;
`;

const NavIndicatorContainer = styled.div`
  width: 20px;
  height: 100%;
  padding: 5.5px;
  position: relative;
`;

type NavIndicatorProps = {
  topPos: number;
};

const NavIndicator = styled.div<NavIndicatorProps>`
  background-color: white;
  width: 9px;
  height: 9px;
  border-radius: 100%;
  position: absolute;

  transition: 250ms ease-out;
  top: ${props => props.topPos}%;
`;

type Props = {
  isDialog: boolean;
  setShowNavDialog: (value: boolean) => void;
};

const NavLinks: React.FC<Props> = ({ isDialog, setShowNavDialog }) => {
  const location = useLocation();

  // TODO: Proper math instead of magic numbers
  const positions: number[] = [6, 26, 46, 65, 85];
  const [navIndicatorPos, setNavIndicatorPos] = useState<number>(85);

  useEffect(() => {
    switch (location.pathname) {
      case '/code-projects':
        setNavIndicatorPos(positions[1]);
        break;
      case '/music-projects':
        setNavIndicatorPos(positions[2]);
        break;
      case '/about':
        setNavIndicatorPos(positions[3]);
        break;
      case '/':
        setNavIndicatorPos(positions[4]);
        break;
    }
  }, [location]);

  return (
    <NavLinksContainer>
      {!isDialog ? (
        <NavIndicatorContainer>
          <NavIndicator topPos={navIndicatorPos} />
        </NavIndicatorContainer>
      ) : null}

      <NavLinksWrapper $isDialog={isDialog}>
        <NavLink
          to='https://blog.sebastianstupak.com/'
          target='_blank'
          rel='noopener noreferrer'
          selected={false}
          onClick={() => setShowNavDialog(false)}
        >
          Blog
        </NavLink>
        <NavLink
          to='/code-projects'
          selected={location.pathname === '/code-projects'}
          onClick={() => setShowNavDialog(false)}
        >
          Code
        </NavLink>
        <NavLink
          to='/music-projects'
          selected={location.pathname === '/music-projects'}
          onClick={() => setShowNavDialog(false)}
        >
          Music
        </NavLink>
        <NavLink
          to='/about'
          selected={location.pathname === '/about'}
          onClick={() => setShowNavDialog(false)}
        >
          About
        </NavLink>
        <NavLink
          to='/'
          selected={location.pathname === '/'}
          onClick={() => setShowNavDialog(false)}
        >
          Home
        </NavLink>
      </NavLinksWrapper>
    </NavLinksContainer>
  );
};

export default NavLinks;
