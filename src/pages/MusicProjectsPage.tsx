import React, { useRef, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import { AppleIcon, SpotifyIcon } from '../components/Icons';

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

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 22px;
`;

const InfoContainer = styled.div`
  text-align: end;
  margin-right: 12px;
`;

type AlbumCoverProps = {
  src: string;
};

const AlbumCover = styled.div<AlbumCoverProps>`
  background-image: url(${props => props.src});
  background-size: cover;

  min-width: 130px;
  min-height: 130px;

  @media (min-width: 900px) {
    min-width: 160px;
    min-height: 160px;
  }

  @media (min-width: 1160px) {
    min-width: 200px;
    min-height: 200px;
  }

  @media (min-width: 1350px) {
    min-width: 240px;
    min-height: 240px;
  }
`;

const AlbumHoveredContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(4px);

  display: flex;
  align-items: center;
  justify-content: center;
`;

const AlbumTitle = styled.h1`
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

const AlbumArtists = styled.h3`
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

const AlbumDate = styled.span`
  cursor: default;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  opacity: 0.85;
  font-style: bold;
  letter-spacing: 0.8px;
  font-size: 14px;
  line-height: 16px;

  @media (min-width: 500px) {
    font-size: 18px;
    line-height: 24px;
  }
`;

type MusicProject = {
  id: number;
  artist: string;
  title: string;
  year: string;
  cover: string;
  collaborators?: string[];
  links?: {
    spotify: string;
    apple: string;
  };
};

type IconWrapperProp = {
  $width?: number;
  $height?: number;
  $margin?: string;
};

const IconWrapper = styled.a<IconWrapperProp>`
  display: block;
  position: relative;

  width: ${props => (props.$width ? props.$width : '24')}px;
  height: ${props => (props.$height ? props.$height : '24')}px;
  cursor: pointer;

  opacity: 0.6;
  transition: 250ms ease-out;

  ${props => (props.$margin ? `margin: ${props.$margin};` : '')}

  :hover {
    opacity: 0.9;
  }
`;

const projects: MusicProject[] = [
  {
    id: 3,
    artist: 'Osaki Seiichi',
    title: '???',
    year: 'Soon',
    cover: `${window.location.origin}/images/music-next-album-cover.jpeg`,
    collaborators: ['Sebastián Stupák', 'Peter Petrek']
  },
  {
    id: 2,
    artist: 'Osaki Seiichi',
    title: 'The Tale Of A Long Forgotten Sunken City',
    year: '2022',
    cover: `${window.location.origin}/images/music-sunken-city-cover.jpeg`,
    collaborators: ['Sebastián Stupák', 'Peter Petrek'],
    links: {
      spotify: 'https://open.spotify.com/album/6enmp9taTmsESY2yQCGQWz',
      apple:
        'https://music.apple.com/us/album/the-tale-of-a-long-forgotten-sunken-city/1625559673'
    }
  },
  {
    id: 1,
    artist: '.ian Motion',
    title: 'Sessions Vol. I',
    year: '2021',
    cover: `${window.location.origin}/images/music-sessions-vol-i-cover.jpeg`,
    collaborators: ['Peter Petrek'],
    links: {
      spotify: 'https://open.spotify.com/album/4RiH77Qp2jEiUE6LAJVgms',
      apple: 'https://music.apple.com/gb/album/sessions-vol-1/1593439482'
    }
  },
  {
    id: 0,
    artist: '.ian Motion',
    title: 'Blank Sky',
    year: '2020',
    cover: `${window.location.origin}/images/music-blank-sky-cover.jpeg`,
    links: {
      spotify:
        'https://open.spotify.com/album/6AP9TL6DZ7QTnTu3j9oz4N?si=sIab19ZbTuK1FZcjg1z9pg',
      apple: 'https://music.apple.com/gb/album/blank-sky/1503963138'
    }
  }
];

export const MusicProjectsPage = () => {
  const [hoveredProject, setHoveredProject] = useState<number | undefined>(
    undefined
  );
  const hoveredProjectRef = useRef(null);

  return (
    <Container>
      <Fade triggerOnce direction='up' cascade damping={0.3}>
        {projects.map(project => (
          <ProjectContainer
            key={project.id}
            onPointerEnter={() => setHoveredProject(project.id)}
            onPointerOver={() => setHoveredProject(project.id)}
            onClick={() => setHoveredProject(project.id)}
            onPointerLeave={() => setHoveredProject(undefined)}
          >
            <InfoContainer>
              <AlbumTitle>{project.title}</AlbumTitle>
              <AlbumArtists>{`${project.artist} ${
                project.collaborators
                  ? `(with ${project.collaborators?.join(', ')})`
                  : ''
              }`}</AlbumArtists>
              <AlbumDate>{project.year}</AlbumDate>
            </InfoContainer>
            <AlbumCover draggable='false' src={project.cover}>
              {project.links ? (
                <CSSTransition
                  nodeRef={hoveredProjectRef}
                  in={hoveredProject === project.id}
                  timeout={200}
                  classNames='fade'
                  unmountOnExit
                >
                  <AlbumHoveredContainer ref={hoveredProjectRef}>
                    <IconWrapper
                      $margin='-6px 6px 6px'
                      $height={33}
                      $width={33}
                      href={project.links.apple}
                      target='_blank'
                    >
                      <AppleIcon color='#fff' />
                    </IconWrapper>
                    <IconWrapper
                      $height={40}
                      $width={40}
                      $margin='6px'
                      href={project.links.spotify}
                      target='_blank'
                    >
                      <SpotifyIcon color='#fff' />
                    </IconWrapper>
                  </AlbumHoveredContainer>
                </CSSTransition>
              ) : null}
            </AlbumCover>
          </ProjectContainer>
        ))}
      </Fade>
    </Container>
  );
};

export default MusicProjectsPage;
