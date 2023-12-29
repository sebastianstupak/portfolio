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

  align-items: end;

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

type ProjectContainerProp = {
  $isClickable: boolean;
};

const ProjectContainer = styled.a<ProjectContainerProp>`
  display: flex;
  flex-direction: column;
  text-align: end;
  margin-bottom: 32px;

  text-decoration: none;
  color: white;
  opacity: 0.85;
  transition: all 0.5s ease-in-out;

  :hover {
    opacity: 1;
  }

  ${props =>
    props.$isClickable
      ? 'padding-right: 8px; margin-right: -8px; border-right: 2px solid rgba(255, 255, 255, 0.3);'
      : ''}
`;

const ProjectTitle = styled.h1`
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

const ProjectInfo = styled.span`
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

type CodeProject = {
  id: number;
  name: string;
  type: string;
  content: string;
  year: string;
  link?: string;
};

const projects: CodeProject[] = [
  {
    id: 10,
    name: 'Software Developer (VISSIM s.r.o.)',
    type: 'Full-time',
    content: 'Backend',
    year: '2023 - Present'
  },
  {
    id: 9,
    name: 'Maethril',
    type: 'Game studio',
    content: 'Internal & Games',
    year: '2018 - Present'
  },
  {
    id: 8,
    name: 'Maethril Web',
    type: 'Personal',
    content: 'Company website',
    year: '2023',
    link: 'https://maethril.net/'
  },
  {
    id: 7,
    name: 'Sebastián Stupák',
    type: 'Personal',
    content: 'Portfolio',
    year: '2023',
    link: '/'
  },
  {
    id: 6,
    name: 'Test Developer (GN Hearing A/S)',
    type: 'Student Helper',
    content: 'QA & Tech writer',
    year: '2022 - 2023'
  },
  {
    id: 5,
    name: 'Osaki Seiichi',
    type: 'Commision',
    content: 'Portfolio',
    year: '2022',
    link: 'https://osakiseiichi.com/'
  },
  {
    id: 4,
    name: 'Maethril Blog',
    type: 'Personal',
    content: 'Blog',
    year: '2021',
    link: 'https://blog.maethril.net/'
  },
  {
    id: 3,
    name: 'Maethril Links',
    type: 'Personal',
    content: 'Link tree',
    year: '2021',
    link: 'https://links.maethril.net/'
  },
  {
    id: 2,
    name: 'Hexa',
    type: 'Personal',
    content: 'Mobile game',
    year: '2020-2021'
  },
  {
    id: 1,
    name: 'Reserve a sportsground',
    type: 'School',
    content: 'Website',
    year: '2020-2021',
    link: 'https://sportoviska.maethril.net/'
  },
  {
    id: 0,
    name: 'Localization Manager (DATAcrea s.r.o.)',
    type: 'Internship',
    content: 'Internal app',
    year: '2019'
  }
];

export const CodeProjectsPage = () => (
  <Container>
    <Fade triggerOnce direction='up' cascade damping={0.3}>
      {projects.map(project => (
        <ProjectContainer
          key={project.id}
          $isClickable={!!project.link}
          href={project.link}
          target='_blank'
        >
          <ProjectTitle>{project.name}</ProjectTitle>
          <ProjectInfo>{`${project.content} / ${project.type} / ${project.year}`}</ProjectInfo>
        </ProjectContainer>
      ))}
    </Fade>
  </Container>
);

export default CodeProjectsPage;
