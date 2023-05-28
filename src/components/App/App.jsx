// Libs
import { Navigate, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Helpers
import { lazyDefaultModuleImport } from 'helpers/lazyModuleImport';
// Layout
import Layout from '../Layout/Layout';
// Pages
const Home = lazyDefaultModuleImport('Home');
const Movies = lazyDefaultModuleImport('Movies');
const MovieDetails = lazyDefaultModuleImport('MovieDetails');
const Cast = lazyDefaultModuleImport('Cast');
const Reviews = lazyDefaultModuleImport('Reviews');

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Route>
      </Routes>

      <ToastContainer autoClose={3000} theme="colored" />
    </>
  );
};
