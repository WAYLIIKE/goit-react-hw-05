import { useParams } from 'react-router-dom';
import css from './Reviews.module.css';
import { useEffect, useState } from 'react';
import { getMovieReview } from '../../fetchAPI';
import { ReviewList } from '../ReviewList/ReviewList';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const params = useParams();
  const id = params.movieId;

  useEffect(() => {
    const controller = new AbortController();
    async function fetchDataReview() {
      try {
        const response = await getMovieReview(controller, id);
        setReviews(response.results);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          console.log(error);
        }
      }
    }

    fetchDataReview();
    return () => {
      controller.abort();
    };
  }, [id]);

  return <div>{reviews.length > 0 && <ReviewList data={reviews} />}</div>;
};
