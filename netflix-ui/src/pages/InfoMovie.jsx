import { useSelector, useDispatch } from "react-redux";
import { fetchMovieDetails } from "../store/index";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import styled from "styled-components";

export default function InfoMovie() {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const movieDetails = useSelector((state) => state.Netflix.movieDetails);
  const { title, director, actors, videoUrl, posterUrl } = movieDetails || {};

  useEffect(() => {
    console.log('dispatching fetchMovieDetails')
    dispatch(fetchMovieDetails(movieId));
  }, [dispatch, movieId]);
  

  return (
    <Container>
      <div className="back">
        <BsArrowLeft onClick={() => navigate(-1)} />
      </div>
      <div className="infoMovie">
        <div className="poster">
          <img src={posterUrl} alt={title} />
        </div>
        <div className="descript">
          <h2>{title}</h2>
          <p>Đạo diễn: {director}</p>
          <p>Diễn viên: {actors}</p>
        </div>
      </div>
      <div className="trailer">
        <video controls>
          <source src={videoUrl} type="video/mp4" />
        </video>
      </div>
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
