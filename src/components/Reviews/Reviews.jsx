import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getReviews } from '../../API_links/Api';

const Reviews = () => {
  const [reviewsList, setReviewsList] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await getReviews(movieId);
        setReviewsList(data.results);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, [movieId]);

  return (
    <div>
      <h2>Reviews for Movie #{movieId}</h2>
      <ul>
        {reviewsList.length > 0 ? (
          reviewsList.map(({ author, content, id }) => (
            <li key={id}>
              <h3>{author}</h3>
              <p>{content}</p>
            </li>
          ))
        ) : (
          <p>Sorry, we don't have any reviews for this movie.</p>
        )}
      </ul>
    </div>
  );
};

export default Reviews;
