/* eslint-disable max-len */
import React from 'react';
import { Fade } from 'react-awesome-reveal';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-width: 100%;

  max-height: calc(100% - (2 * 10px));
  max-width: calc(100% - (2 * 10px));

  color: white;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  @media (min-width: 400px) {
    margin: 4px;
    max-height: calc(100% - (2 * 4px));
    max-width: calc(100% - (2 * 4px));
  }

  @media (min-width: 600px) {
    margin: 24px;
    max-height: calc(100% - (2 * 24px));
    max-width: calc(100% - (2 * 24px));
    min-width: unset;
  }

  @media (min-width: 900px) {
    flex-direction: column;
  }

  @media (min-width: 1000px) {
    margin: 64px;
    max-height: calc(100% - (2 * 64px));
    max-width: calc(100% - (2 * 64px));
  }

  padding: 16px;
  display: flex;
  flex-direction: column;

  /* Mask */
  --mask-height: 16px;
  --mask-image-content: linear-gradient(
    to bottom,
    transparent,
    black var(--mask-height),
    black calc(100% - var(--mask-height)),
    transparent
  );

  --mask-size-content: 100% 100%;
  --mask-image-scrollbar: linear-gradient(black, black);

  --mask-size-scrollbar: 1px 100%;

  mask-image: var(--mask-image-content), var(--mask-image-scrollbar);
  mask-size: var(--mask-size-content), var(--mask-size-scrollbar);
  mask-position:
    0 0,
    100% 0;
  mask-repeat: no-repeat, no-repeat;
`;

const GeneralText = styled.span`
  cursor: default;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  letter-spacing: 1.1px;

  font-weight: 100;
  font-style: normal;
  display: block;
  max-width: 203px;
`;

const EducationContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: auto;
`;

const EducationItem = styled.div`
  display: flex;
  flex-direction: column;
  text-align: end;
  margin-top: 40px;
  margin-bottom: 5px;

  text-decoration: none;
  color: white;
`;

const EducationHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 6px;
`;

const EducationName = styled.h2`
  cursor: default;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;

  font-weight: 100;
  font-style: normal;
  font-size: 20px;
  line-height: 24px;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.7);

  @media (min-width: 500px) {
    font-size: 26px;
    line-height: 32px;
  }

  @media (min-width: 1160px) {
    font-size: 36px;
    line-height: 40px;
  }

  @media (min-width: 1300px) {
    font-size: 46px;
    line-height: 50px;
  }
`;

const EducationLocation = styled.span`
  cursor: default;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;

  font-weight: bold;
  font-style: italic;
  font-size: 18px;
  line-height: 22px;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.7);

  @media (min-width: 500px) {
    font-size: 20px;
    line-height: 28px;
  }

  @media (min-width: 1160px) {
    font-size: 12px;
    line-height: 16px;
  }

  @media (min-width: 1300px) {
    font-size: 20px;
    line-height: 28px;
  }
`;

const EducationInfo = styled.span`
  cursor: default;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;

  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 1px;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.7);

  @media (min-width: 1160px) {
    font-size: 18px;
    line-height: 22px;
  }

  @media (min-width: 1300px) {
    font-size: 22px;
    line-height: 26px;
  }
`;

type Education = {
  id: number;
  name: string;
  department: string;
  location: string;
  time: string;
};

const educations: Education[] = [
  {
    id: 2,
    name: 'Aichi Shukutoku University',
    department: 'Global Communication',
    location: 'Nagoya, Aichi, Japan',
    time: '2022-2023'
  },
  {
    id: 1,
    name: 'Zealand',
    department: 'AP Degree of Marketing Management',
    location: 'Roskilde, Denmark',
    time: '2021 - 2023'
  },
  {
    id: 0,
    name: 'High School of Electrotechnical Engineering',
    department: 'Technical lyceum',
    location: 'Košice, Slovakia',
    time: '2017 - 2021'
  }
];

export const AboutPage = () => (
  <Container>
    <Fade triggerOnce direction='up'>
      <GeneralText>
        Born in Slovakia in 2001.
        <br />
        Avid learner who is diving into all fields. From art, to marketing, to
        psychology - and of course, computer science. Exposure to code and art
        at an early age lead me to try and find a link between the two. Now on a
        journey to bridge multiple fields and try to bring something new to the
        table.
      </GeneralText>
    </Fade>
    <EducationContainer>
      <Fade triggerOnce direction='up' cascade delay={300} damping={0.3}>
        {educations.map(education => (
          <EducationItem key={education.id}>
            <EducationHeader>
              <EducationLocation>({education.location})</EducationLocation>
              <EducationName>{education.name}</EducationName>
            </EducationHeader>
            <EducationInfo>
              {education.department} / {education.time}
            </EducationInfo>
          </EducationItem>
        ))}
      </Fade>
    </EducationContainer>
  </Container>
);

export default AboutPage;
