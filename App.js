import logo from './logo.svg';
import React from 'react';
import './App.css';
import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './Home';
import Movie from './SingleMovie';
import Error from './Error';
import Search from './Search';
import Movies from './Movies';
import Test from './Test';
import useFetch from './useFetch';

const App =() =>
{
  return (
    <>
      
        <Routes>
           <Route path='/' element={<Home />} />
           <Route path='movie/:id' element={<Movie />} />
           <Route path="*" element={<Error />} />
        </Routes>
      

    </>
  );
}

export default App;
