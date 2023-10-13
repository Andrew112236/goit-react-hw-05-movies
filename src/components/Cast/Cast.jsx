import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieCredits } from '../../API_links/Api';
import { CastList, CastItem, Name, Character } from './Cast.styled';

const Cast = () => {
  const [credits, setCredits] = useState([]);
  const { movieIdParam } = useParams();
  useEffect(() => {
    getMovieCredits(movieIdParam).then(data => setCredits(data.credits));
  }, [movieIdParam]);

  return (
    <CastList>
      {credits.length > 0
        ? credits.map(({ id, name, profile_path, character }) => (
            <CastItem key={id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w200${profile_path}`
                    : `http://www.suryalaya.org/images/no_image.jpg`
                }
                alt="actor"
                loading="lazy"
                width={120}
                height={180}
              />
              <Name>{name}</Name>
              <Character> Character: {character}</Character>
            </CastItem>
          ))
        : "Sorry, there isn't any info :("}
    </CastList>
  );
};

export default Cast;
