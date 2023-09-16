import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import MovieList from '../../components/movieCard/MovieList';
import '../Homepage/homepage.css'
import Footer from '../../components/footer/Footer';


const Home = () => {
    return (
        <div className="main-container">
            <Navbar/>
            <Header/>
            <MovieList/>
              
            <Footer/>

        </div>
    )
}


export default Home;