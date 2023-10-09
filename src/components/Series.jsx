import React, { useEffect, useState } from "react";
import { Spinner, TextInput, Button } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { api, api_key } from "../api/api";
import { fetchMovies } from "../redux/action/movies";
import SeriesItem from "./SeriesItem";

const Series = () => {
  
  let movies;
  const dispact = useDispatch();

  let loadingStatus = false;

  let [title, setTitle] = useState("Movies");

  movies = useSelector((state) => state.movies.movies);

  const getSeries = async () => {
    setTitle("Series");
    loadingStatus = true;
    const response = await api.get(`/tv/on_the_air?api_key=${api_key}`);
    dispact(fetchMovies(response.data.results));
    loadingStatus = false;
  };

  const popularSeries = async () => {
    setTitle("Popular Series");
    loadingStatus = true;
    const response = await api.get(`/tv/popular?api_key=${api_key}`);
    dispact(fetchMovies(response.data.results));
    loadingStatus = false;
  };

  const [search_key, setSearch_key] = useState("");

  const searchSeries = async () => {
    if (search_key!="") {
      const responnse = await api.get(
        `/search/tv?query=${search_key}&api_key=${api_key}`
      );
      dispact(fetchMovies(responnse.data.results));
    }else{
        getSeries();
    }

  };
  
  useEffect(() => {
    getSeries();
  }, []);

  return (
    <div>
      <div className="flex justify-between">
        <div className="flex gap-2">
          <span
            onClick={() => getSeries()}
            className=" py-2 px-3 rounded-md bg-blue-900"
          >
            <i className="fa-solid fa-users mr-2"></i>
            Series
          </span>
          <span
            onClick={() => popularSeries()}
            className=" py-2 px-3 rounded-md bg-blue-900"
          >
            <i className="fa-regular fa-calendar-days mr-2"></i>
            Popular Series
          </span>
        </div>
        <div className="flex justify-center items-center">
          <TextInput
            value={search_key}
            onChange={(e) => setSearch_key(e.target.value)}
            id="small"
            sizing="sm"
            color="info"
            type="text"
          />
          <Button color="blue" onClick={() => searchSeries()}>
            Search
          </Button>
        </div>
      </div>

      <h1 className=" text-center text-xl py-4">{title}</h1>

      <div className=" text-center">
        {loadingStatus ? (
          <Spinner aria-label="Pink spinner example" color="pink" />
        ) : (
          ""
        )}
      </div>

      <div className=" grid gap-2 lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
        {movies.length != 0 ? (
          movies.map((movie) => <SeriesItem key={movie.id} movie={movie} />)
        ) : (
          <h1 className=" text-red-700 text-center">
            <div className=" text-center">
              <Spinner aria-label="Pink spinner example" color="pink" />
            </div>
          </h1>
        )}
      </div>
    </div>
  );
};

export default Series;
