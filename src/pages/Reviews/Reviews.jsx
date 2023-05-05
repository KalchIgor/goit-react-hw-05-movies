import { getReviews } from "shared/Api/Api"; 
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "components/Loader/Loader";
import css from "./Reviews.module.css"

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const getReview = async () => {
      try {
          setLoading(true);
          const { results } = await getReviews(movieId);
          setReviews(results);
      } catch (e) {
          setError(e);
      } finally {
          setLoading(false);
      }
    }
    getReview();
  }, [movieId]);

    return (
      <div className={css.reviewsInfo}>
        {loading && <Loader />}
        {error && <p>Something wrong</p>} 
          {reviews.length > 0 ? (
              <>
              <ul>
                  {reviews.map(({ id, author, content }) => (
                  <li key={id}>
                      <p className={css.reviewsAuthor}>{author}</p>
                      <p>{content}</p>
                  </li>
                  ))}
              </ul>
              </>
          ) : (
              <p>We don't have any reviews for this movie</p>
          )}
      </div>
  );
  }