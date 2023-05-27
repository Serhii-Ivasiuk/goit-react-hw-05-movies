// Libs
import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
        </ul>
      </nav>
      <hr />

      <Suspense fallback={<BeatLoader color="#36d7b7" />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
