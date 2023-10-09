import React, { useEffect } from "react";
import { Card, Spinner } from "flowbite-react";
import { Link, useParams } from "react-router-dom";
import { api, api_key } from "../api/api";
import { useDispatch, useSelector } from "react-redux";
import { selectMovies, unselectMovies } from "../redux/action/movies";

const MovieDetail = () => {
  const { id } = useParams();
  const dispact = useDispatch();

  const getMovie = async () => {
    const response = await api.get(`/movie/${id}?api_key=${api_key}`);
    dispact(selectMovies(response.data));
  };

  useEffect(() => {
    if (id) {
      getMovie();
    }

    return () => dispact(unselectMovies({}));
  }, []);

  const movie = useSelector((state) => state.movies.movie);
console.log(movie);
  return (
    <div className=" px-8 py-5 flex justify-center items-center">
      <div className="w-1/2">
        <Link to="/">
          <h1>
            <i className="fa-solid fa-arrow-left"></i>Back
          </h1>
        </Link>
        {JSON.stringify(movie) == {} ? (
          <div className=" text-center">
            <Spinner aria-label="Pink spinner example" color="pink" />
          </div>
        ) : (
          <Card
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <p>{movie.original_title}</p>
            </h5>
            <div className="flex gap-2 flex-wrap">
              <span className=" py-2 px-3 rounded-md bg-blue-900">
                <i className="fa-solid fa-star mr-2"></i>
                {movie.vote_average}
              </span>
              <span className=" py-2 px-3 rounded-md bg-blue-900">
                <i className="fa-solid fa-users mr-2"></i>
                {movie.vote_count}
              </span>
              <span className=" py-2 px-3 rounded-md bg-blue-900">
              <i className="fa-solid fa-calendar-days mr-2"></i>
                {movie.release_date}
              </span>
              <span className=" py-2 px-3 rounded-md bg-blue-900">
              <i className="fa-solid fa-globe mr-2"></i>
                {movie.production_countries != undefined
                  ? movie.production_countries[0].name
                  : null}
              </span>
            </div>

            <div className="flex gap-2 flex-wrap">
              {
                movie.genres != undefined
                ? movie.genres.map((item,index)=>{
                  return(<span key={index} className=" py-2 px-3 rounded-md bg-gray-400">
                    <i className="fa-solid fa-film mr-2"></i>
                    {item.name}
                  </span>)
                })
                : null     
              }
            </div>

            <div className=" flex flex-col gap-2">
                  {
                    movie.production_companies != undefined
                    ? movie.production_companies.map((item,index)=>{
                      return(<div key={index} className=" py-2 px-3 rounded-md bg-green-400">
                        <i className="fa-solid fa-building mr-2"></i>
                        {item.name}
                      </div>)
                    })
                    : null                 
                    
                  }
            </div>

            <p className="font-normal text-gray-700 dark:text-gray-400">
              {movie.overview}
            </p>
          </Card>
        )}
      </div>
    </div>
  );
};

export default MovieDetail;
