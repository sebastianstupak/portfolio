import React, { ReactNode, Ref, createRef } from 'react';
import { Navigate } from 'react-router-dom';
import AboutPage from './AboutPage';
import CodeProjectsPage from './CodeProjectsPage';
import HomePage from './HomePage';
import MusicProjectsPage from './MusicProjectsPage';

type AppRoute = {
  path: string;
  name?: string;
  element: ReactNode;
  nodeRef: Ref<HTMLDivElement>;
};

const routes: AppRoute[] = [
  {
    path: '/',
    name: 'Home',
    element: <HomePage />,
    nodeRef: createRef()
  },
  {
    path: '/about',
    name: 'About',
    element: <AboutPage />,
    nodeRef: createRef()
  },
  {
    path: '/code-projects',
    name: 'Code',
    element: <CodeProjectsPage />,
    nodeRef: createRef()
  },
  {
    path: '/music-projects',
    name: 'Music',
    element: <MusicProjectsPage />,
    nodeRef: createRef()
  },
  {
    path: '*',
    element: <Navigate to='/' replace />,
    nodeRef: createRef()
  }
];

export default routes;
