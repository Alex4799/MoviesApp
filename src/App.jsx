
import React from 'react'
import Nav from './components/Nav';
import { Route, Routes} from 'react-router-dom'
import NotFound from './components/NotFound';
import Movie from './components/Movie';
import Series from './components/Series';
import MovieDetail from './components/MovieDetail';
import SeriesDetail from './components/SeriesDetail';

const App = ()=> {
  return (
    <div>
      <div>
        <Nav/>
      </div>

      <Routes>
        <Route path='/' element={<div><Movie/></div>}></Route>
        <Route path='/movies' element={<div><Movie/></div>}></Route>
        <Route path='/series' element={<div><Series/></div>}></Route>
        <Route path='/detail/movie/:id' element={<div><MovieDetail/></div>}></Route>
        <Route path='/detail/series/:id' element={<div><SeriesDetail/></div>}></Route>
        <Route path='*' element={<div><NotFound/></div>}></Route>
      </Routes>
    </div>
  )
}

export default App