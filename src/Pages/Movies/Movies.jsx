import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from '../../API_links/Api';
import Loader from '../../components/Loader/Loader';
import { MovieList, MovieLink } from '../../Pages/Home/Home.styled';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { Container } from 'components/SharedLayout/SharedLayout.styled';

function Movies() {
  const [searchParams] = useSearchParams();
  const movieName = searchParams.get('movieName') ?? '';
  const [moviesList, setMoviesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (movieName === '') {
      return;
    }
    setMoviesList([]);
    setIsLoading(true);

    searchMovies(movieName)
      .then(data => {
        if (!data.results.length) {
          setIsLoading(false);
          setError(true);
          console.log(
            'There are no movies with this request. Please try again'
          );
        } else {
          setError(false);
          setMoviesList(data.results);
          setIsLoading(false);
        }
      })
      .catch(error => {
        setIsLoading(false);
        setError(true);
        console.error('An error occurred while fetching movies:', error);
      });
  }, [movieName]);

  return (
    <Container>
      <SearchBar />
      {isLoading ? (
        <Loader />
      ) : error ? (
        <p>There was an error loading the movies.</p>
      ) : (
        <MovieList>
          {moviesList.map(movie => (
            <MovieLink key={movie.id} to={`/movies/${movie.id}`}>
              {movie.title}
            </MovieLink>
          ))}
        </MovieList>
      )}
    </Container>
  );
}

export default Movies;
