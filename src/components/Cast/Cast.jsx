import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieCredits } from '../../API_links/Api';
import css from './cast.module.css';
import PropTypes from 'prop-types';

const Cast = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const { movieIdParam } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const { cast } = await getMovieCredits(movieIdParam);
        setData(cast);
        setLoading(false);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [movieIdParam]);

  return (
    <>
      {loading ? (
        'Loading...'
      ) : data && data.length > 0 ? (
        <div className={css.listWrap}>
          <ul className={css.list}>
            {data.map(({ name, character, profile_path, id }) => (
              <li key={id} className={css.listItem}>
                {/* {profile_path && (
                  <img
                    className={css.listImg}
                    alt={name}
                    src={`https://image.tmdb.org/t/p/w92${profile_path}`}
                  />
                )} */}
                {profile_path ? (
                  <img
                    className={css.listImg}
                    alt={name}
                    src={`https://image.tmdb.org/t/p/w92${profile_path}`}
                  />
                ) : (
                  <img className={css.listImg} alt={name} />
                )}

                <p className={css.listName}>{name}</p>
                <p className={css.listCharacter}>{character}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className={css.error}>No data found</p>
      )}
    </>
  );
};

Cast.propTypes = {
  movieId: PropTypes.number,
};

export default Cast;