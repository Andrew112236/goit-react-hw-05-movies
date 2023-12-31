import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getReviews } from '../../API_links/Api';
import { ReviewContainer } from '../Styles/Element.styled';

const Reviews = () => {
  const [reviewsList, setReviewsList] = useState([]);
  const { movieIdParam } = useParams();
  useEffect(() => {
    getReviews(movieIdParam).then(data => setReviewsList(data.results));
  }, [movieIdParam]);

  return (
    <ReviewContainer>
      {reviewsList.length > 0
        ? reviewsList.map(({ author, content, id }) => (
            <li key={id}>
              <h3>{author}</h3>
              <p>{content}</p>
            </li>
          ))
        : "Sorry, we don't have any review for this movie"}
    </ReviewContainer>
  );
};
export default Reviews;
