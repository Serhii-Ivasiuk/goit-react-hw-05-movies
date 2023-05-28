// Libs
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// Components
import Navigation from 'components/Navigation/Navigation';
import Loader from 'components/Loader/Loader';
// Styled components
import { Header, Container, Main } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Header>
        <Container>
          <Navigation />
        </Container>
      </Header>
      <Main>
        <Container>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Container>
      </Main>
    </>
  );
};

export default Layout;
