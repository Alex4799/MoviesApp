import React from 'react'
import { Card } from 'flowbite-react';
import { Link } from "react-router-dom";

const MovieItem = ({movie}) => {
  return (
    <div className="">
    <Link to={`/detail/movie/${movie.id}`}>
      <Card className=' h-full'
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          <p>{movie.original_title}</p>
        </h5>
        <div className='flex gap-2'>
            <span className=' py-2 px-3 rounded-md bg-blue-900'><i className="fa-solid fa-star mr-2"></i>{movie.vote_average}</span>
            <span className=' py-2 px-3 rounded-md bg-blue-900'><i className="fa-regular fa-calendar-days mr-2"></i>{movie.release_date}</span>
        </div>
        <p className="font-normal text-gray-700 dark:text-gray-400">
            {movie.overview.slice(0,100)+"......"}
        </p>
      </Card>
    </Link>
  </div>
  )
}

export default MovieItem