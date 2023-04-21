import { useSelector, useDispatch } from "react-redux";
import { fetchMovieDetails } from "../store/index";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import styled from "styled-components";

export default function InfoMovie({movieId}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const movieDetails = useSelector((state) => state.Netflix.movieDetails);
  const { title, poster_path, videos, crew, cast } = movieDetails || {};


  useEffect(() => {
    console.log('dispatching fetchMovieDetails')
    dispatch(fetchMovieDetails(movieId));
  }, [dispatch, movieId]);

  const director = crew?.find(member => member.department === 'Directing' && member.job === 'Director')?.name;
  const actorNames = cast?.slice(0, 5).map(member => member.name).join(', ');
  const videoUrl = videos?.results?.[0]?.key ? `https://www.youtube.com/watch?v=${videos.results[0].key}` : null;

  return (
    <Container>
      <div className="back">
        <BsArrowLeft onClick={() => navigate(-1)} />
      </div>
      <div className="infoMovie">
        <div className="poster">
          <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} />
        </div>
        <div className="descript">
          <h2>{title}</h2>
          <p>Đạo diễn: {director}</p>
          <p>Diễn viên: {actorNames}</p>
        </div>
      </div>
      {videoUrl && (
        <div className="trailer">
          <iframe width="560" height="315" src={videoUrl} title="Trailer" allowFullScreen />
        </div>
      )}
    </Container>
  );
}

const Container = styled.div`
  .back {
    padding: 2rem;
    svg {
      font-size: 3rem;
      cursor: pointer;
    }
  }
  .infoMovie {
    display: flex;
    .poster{
      margin: 30px;
      padding: 0 10px;
      img{
        width: 200px;
        height: 300px;
      }
    }
    .descript{
      margin: 30px;
      padding: 0 10px;
    }
    video {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
  .trailer {
    margin-left: 40px;
  }
`;
