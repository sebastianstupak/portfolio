import React from 'react';
import styled from 'styled-components';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Background from './components/Background';
import Layout from './Layout';
import routes from './pages/routes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: routes.map(route => ({
      index: route.path === '/',
      path: route.path === '/' ? undefined : route.path,
      element: route.element
    }))
  }
]);

const AppContainer = styled.div`
  height: 100%;
  background-color: black;
`;

export const App = () => (
  <AppContainer>
    <RouterProvider router={router} />
    <Background />
  </AppContainer>
);

export default App;
export { routes };
