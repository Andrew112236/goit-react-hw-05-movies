import React, { useState, useEffect } from 'react';
import { useLocation, useParams, Link } from 'react-router-dom';
import { getMovieDetails } from '../../API_links/Api';
import {
  Button,
  GenresList,
  InfoBox,
  LinkBack,
  MovieBox,
  MovieInfo,
  Title,
} from '../../Pages/MovieDetails/MovieDetails.styled';

function MovieDetails() {
  const { movieIdParam } = useParams();
  const [movieDetail, setMovieDetail] = useState({});
  const location = useLocation();

  useEffect(() => {
    getMovieDetails(movieIdParam).then(data => setMovieDetail(data));
  }, [movieIdParam]);

  const { original_title, overview, genres, poster_path, vote_average } =
    movieDetail;
  const score = vote_average * 10;
  const scoreToFixed = score.toFixed(2);

  return (
    <main>
      <Button type="button">
        <LinkBack to={location.state?.from ?? '/'}>Go back</LinkBack>
      </Button>
      <MovieBox className="MovieBox">
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w300${poster_path}`
              : `http://www.suryalaya.org/images/no_image.jpg`
          }
          width={320}
          height={380}
          loading="lazy"
          alt="poster"
        />
        <MovieInfo>
          <Title>{original_title}</Title>
          <h3>User score: {scoreToFixed}%</h3>
          <h3>Overview</h3>
          <p>{overview}nu ma vezi Silviu</p>
          <h3>Genres</h3>
          <GenresList>
            {genres &&
              genres.length &&
              genres.map(({ id, name }) => <li key={id}>{name}</li>)}
          </GenresList>
        </MovieInfo>
      </MovieBox>
      <InfoBox>
        <h4>Additional information</h4>
        <ul>
          <li>
            <Link
              to={{
                pathname: '/cast',
                state: { ...location.state },
              }}
            >
              Cast
            </Link>
          </li>
          <li>
            <Link
              to={{
                pathname: '/reviews',
                state: { ...location.state },
              }}
            >
              Reviews
            </Link>
          </li>
        </ul>
      </InfoBox>
    </main>
  );
}

export default MovieDetails;
