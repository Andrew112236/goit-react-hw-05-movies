import { useState, useEffect } from 'react';
import { MovieLink, MovieList, Title } from '../Home/Home.styled';
import { getTrending } from '../../API_links/Api';
import Loader from '../../components/Loader/Loader';
import { useLocation } from 'react-router-dom';

function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    async function fetchData() {
      try {
        const data = await getTrending();
        setTrendingMovies(data.results);
        setIsLoading(false);
      } catch (error) {
        console.log('There is and error:', error);
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <main>
      <Title>Top Movies for today</Title>
      <MovieList>
        {trendingMovies.map(movie => (
          <li key={movie.id}>
            <MovieLink to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.original_title || movie.name}
            </MovieLink>
          </li>
        ))}
        {isLoading && <Loader />}
      </MovieList>
    </main>
  );
}

export default Home;
