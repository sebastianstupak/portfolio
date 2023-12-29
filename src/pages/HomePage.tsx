/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 16px;
  display: flex;
  align-items: end;

  @media (min-width: 400px) {
    padding: 20px;
  }

  @media (min-width: 600px) {
    padding: 40px;
  }

  @media (min-width: 900px) {
    align-items: start;
    justify-content: end;
  }

  @media (min-width: 1000px) {
    padding: 80px;
  }
`;

const MottoContainer = styled.div`
  position: relative;
  height: 168px;
  width: 140px;
  padding: 0;
`;

const MottoTextFirst = styled.h2`
  font-weight: 600;
  letter-spacing: 1.3px;
  line-height: 18px;
  cursor: default;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const MottoTextSecond = styled.h2`
  font-weight: 600;
  letter-spacing: 1.3px;
  line-height: 18px;
  cursor: default;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

type MottoContainerProps = {
  show: boolean;
};

const MottoFirstContainer = styled.div<MottoContainerProps>`
  max-height: 300px;
  position: absolute;
  bottom: 99px;
  left: 38px;

  font-size: 8px;
  z-index: 1;

  color: rgba(255, 255, 255, ${props => (props.show ? '0.9' : '0')});
  text-shadow: 0 0 3px
    rgba(255, 255, 255, ${props => (props.show ? '0' : '0.8')});
  transition: 300ms;
`;

const MottoSecondContainer = styled.div<MottoContainerProps>`
  max-height: 300px;
  color: white;
  position: absolute;
  left: 0px;
  bottom: 0px;
  font-size: 8px;

  color: rgba(255, 255, 255, ${props => (props.show ? '0.9' : '0')});
  text-shadow: 0 0 3px
    rgba(255, 255, 255, ${props => (props.show ? '0' : '0.8')});
  transition: 300ms;
`;

export const HomePage = () => {
  const [secondMottoShow, setSecondMottoShow] = useState<boolean>(true);

  return (
    <Container>
      <MottoContainer>
        <MottoFirstContainer show={!secondMottoShow}>
          <MottoTextFirst
            onPointerEnter={() => setSecondMottoShow(false)}
            onPointerLeave={() => setSecondMottoShow(true)}
          >
            Sheet music
            <br />
            and instrument
            <br />
            are medium
            <br />
            of musicians.
          </MottoTextFirst>
        </MottoFirstContainer>
        <MottoSecondContainer show={secondMottoShow}>
          <MottoTextSecond
            onPointerEnter={() => setSecondMottoShow(true)}
            onPointerLeave={() => setSecondMottoShow(true)}
          >
            Code is
            <br />
            the medium
            <br />
            of modern-day
            <br />
            artists - bridging
            <br />
            the gap between
            <br />
            technology
            <br />
            and creativity.
          </MottoTextSecond>
        </MottoSecondContainer>
      </MottoContainer>
    </Container>
  );
};

export default HomePage;
