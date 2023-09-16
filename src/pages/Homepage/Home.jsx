import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import MovieList from '../../components/movieCard/MovieList';
import '../Homepage/homepage.css'
import Footer from '../../components/footer/Footer'

const Home = () => {
       
    const API_KEY= '1ef91e2e402f45a12493311c6d974d7c'

    return (
        <div className="main-container">
            <Navbar apiKey={API_KEY} />
            <Header/>
            <MovieList/>
              
            <Footer/>
        </div>
    )
}


export default Home;