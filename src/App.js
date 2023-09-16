import React from 'react';
import Home from './pages/Homepage/Home';
import MovieDetails from './pages/movieDetails/MovieDetails';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';


function App(){
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}>
        <Route index element={<Home />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
  }

export default App;
