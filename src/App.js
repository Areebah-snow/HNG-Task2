import React from 'react';
import Home from './pages/Homepage/Home';
import MovieDetails from './pages/movieDetails/MovieDetails';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';


function App(){
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home />} />
        <Route path="movie/:id" element={<MovieDetails />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
  );
  }

export default App;
