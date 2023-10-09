import React, { useEffect } from "react";
import Movie from "./Movie.jsx";
import { api, api_key } from "../api/api.js";
import { useDispatch } from "react-redux";
import { fetchMovies } from "../redux/action/movies/index.js";
const Home = () => {
  const dispact = useDispatch();

  const getMovies = async () => {
    const response = await api.get(`/movie/now_playing?api_key=${api_key}`);
    dispact(fetchMovies(response.data.results));
  };

  const popularMovies = async () => {
    const response = await api.get(`/movie/popular?api_key=${api_key}`);
    console.log(response.data.results);
    // dispact(fetchMovies(response.data.results));
  };

  const getSeries = async () => {
    const response = await api.get(`/tv/on_the_air?api_key=${api_key}`);
    console.log(response.data.results);
    // dispact(fetchMovies(response.data.results));
  };

  const popularSeries = async () => {
    const response = await api.get(`/tv/popular?api_key=${api_key}`);
    console.log(response.data.results);
    // dispact(fetchMovies(response.data.results));
  };

  useEffect(() => {
    getMovies();
  });

  return (
    <div>
      <div className="flex gap-2">
      <span onClick={()=>getMovies()} className=" py-2 px-3 rounded-md bg-blue-900">
          <i className="fa-solid fa-star mr-2"></i>
          Movies
        </span>
        <span onClick={()=>popularMovies()} className=" py-2 px-3 rounded-md bg-blue-900">
          <i className="fa-solid fa-star mr-2"></i>
          Popular Movies
        </span>
        <span onClick={()=>getSeries()} className=" py-2 px-3 rounded-md bg-blue-900">
          <i className="fa-solid fa-users mr-2"></i>
          Series
        </span>
        <span onClick={()=>popularSeries()} className=" py-2 px-3 rounded-md bg-blue-900">
          <i className="fa-regular fa-calendar-days mr-2"></i>
          Popular Series
        </span>
      </div>
      <div className=" py-4">
        <Movie />
      </div>
    </div>
  );
};

export default Home;
