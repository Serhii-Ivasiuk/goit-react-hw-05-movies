// Libs
import { Navigate, Route, Routes } from 'react-router-dom';
// Services
import { lazyDefaultModuleImport } from 'services/lazyModuleImport';
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
  );
};
