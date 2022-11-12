import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { makeCastApiReguest } from '../../services/api';
import { CastList } from '../../components/CastList/CastList';
import { Spinner } from '../../components/Spiner/Spiner';

const Cast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const onRequestHandler = async () => {
      try {
        setIsLoading(true);
        const getMovieCast = await makeCastApiReguest(movieId).then(res => res);
        setMovieCast(getMovieCast);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    onRequestHandler();
  }, [movieId]);

  return <>{isLoading ? <Spinner /> : <CastList movieCast={movieCast} />}</>;
};

export default Cast;
