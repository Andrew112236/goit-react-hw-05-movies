import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from '../components/SharedLayout/SharedLayout';
import Loader from '../components/Loader/Loader';
const Cast = lazy(() => import('../components/Cast/Cast'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'));
const Home = lazy(() => import('../Pages/Home/Home'));
const MovieDetails = lazy(() => import('../Pages/MovieDetails/MovieDetails'));
const Movies = lazy(() => import('../Pages/Movies/Movies'));
const NotFound = lazy(() => import('../Pages/NotFound/NotFound'));

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="movies/:movieIdParam" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
