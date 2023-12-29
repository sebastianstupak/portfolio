import React, { useEffect, useRef, useState } from 'react';
import { useOutlet } from 'react-router-dom';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import { useWindowSize } from 'usehooks-ts';
import { routes } from './App';
import NavContainer from './components/NavContainer';
import NavDialog from './components/NavDialog';

const LayoutContainer = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
`;

const FrameY = styled.div`
  height: 12px;
  width: 100%;
  background-color: rgba(20, 20, 20, 0.8);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 600px) {
    height: 22px;
  }
`;

const ContainerMiddle = styled.div`
  display: flex;
  flex: 1;
`;

const FrameX = styled.div`
  height: 100%;
  width: 12px;
  background-color: rgba(20, 20, 20, 0.8);
  backdrop-filter: blur(10px);

  @media (min-width: 600px) {
    width: 22px;
  }
`;

const MainContent = styled.div`
  position: relative;

  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media (min-width: 900px) {
    flex-direction: row;
  }
`;

const BlurBackdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  backdrop-filter: blur(5px);
  overflow: hidden;
`;

const OutletContainer = styled.div`
  position: relative;
  height: 100%;
  flex: 1;
`;

const PageBase = styled.div`
  height: 100%;
  width: 100%;
  max-height: 100%;
  max-width: 100%;
  overflow: hidden;
`;

const CopyrightText = styled.span`
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;

  color: white;
  font-size: 9px;
  opacity: 0.05;

  @media (min-width: 600px) {
    font-size: 12px;
  }
`;

const Layout = () => {
  const { width } = useWindowSize();

  const currentOutlet = useOutlet();
  const { nodeRef } =
    routes.find(route => route.path === location.pathname) ?? {};

  const [showNavDialog, setShowNavDialog] = useState<boolean>(false);
  const navDialogRef = useRef(null);
  const backdropBlurRef = useRef(null);

  useEffect(() => {
    if (showNavDialog && width >= 900) setShowNavDialog(false);
  }, [width]);

  return (
    <LayoutContainer>
      <FrameY />
      <ContainerMiddle>
        <FrameX />
        <MainContent>
          <CSSTransition
            nodeRef={backdropBlurRef}
            in={showNavDialog}
            timeout={200}
            classNames='fade'
            unmountOnExit
          >
            <BlurBackdrop ref={backdropBlurRef} />
          </CSSTransition>
          <NavContainer
            showNavDialog={showNavDialog}
            setShowNavDialog={setShowNavDialog}
          />
          <OutletContainer>
            <CSSTransition
              nodeRef={navDialogRef}
              in={showNavDialog}
              timeout={200}
              classNames='fade'
              unmountOnExit
            >
              <NavDialog
                navDialogRef={navDialogRef}
                setShowNavDialog={setShowNavDialog}
              />
            </CSSTransition>
            <SwitchTransition>
              <CSSTransition
                key={location.pathname}
                nodeRef={nodeRef}
                timeout={200}
                classNames='fade'
                unmountOnExit
              >
                {() => (
                  <PageBase ref={nodeRef} className='fade'>
                    {currentOutlet}
                  </PageBase>
                )}
              </CSSTransition>
            </SwitchTransition>
          </OutletContainer>
        </MainContent>
        <FrameX />
      </ContainerMiddle>
      <FrameY>
        <CopyrightText>
          © Sebastián Stupák {new Date().getFullYear().toString()}
        </CopyrightText>
      </FrameY>
    </LayoutContainer>
  );
};

export default Layout;
