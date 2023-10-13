import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from '../../API_links/Api';
import { CastList, Character } from './Cast.styled';
import { AiFillAmazonSquare } from 'react-icons/ai';

function Cast() {
  const { movieIdParam } = useParams();
  const [castData, setCastData] = useState(null);

  useEffect(() => {
    getMovieCredits(movieIdParam).then(({ cast }) => {
      setCastData(cast);
    });
  }, [movieIdParam]);

  return (
    <div>
      {castData.length > 0 ? (
        castData.map(({ id, profile_path, character, name }) => (
          <CastList key={id}>
            {profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                alt={name}
              />
            ) : (
              <AiFillAmazonSquare size={200} />
            )}

            <Character>{name}</Character>
            <Character>Character : {character.substr(0, 9)}</Character>
          </CastList>
        ))
      ) : (
        <p> Sorry, there are no information!</p>
      )}
    </div>
  );
}

export default Cast;
