import { Routes, Route, Link } from 'react-router-dom'
import React, { useState, createContext } from "react";
import MoviesPage from '../Movies/MoviesPage'
import Homepage from '../Homepage/Homepage'
import NotFoundPage from '../NotFoundPage/NotFoundPage'
import GoToFilm from '../GoToFilm/GoToFilm'
import './Menu.css'
import moviesContainer from '../../MoviesContainer';


export const MoviesContext = createContext(null);

export function Menu() {
    const [movies, setMovies] = useState(moviesContainer)
    return (
        <MoviesContext.Provider value={{ movies, setMovies }}>
            <div>
                <header>
                    <Link to='/'>Home</Link>
                    <Link to='/movies'>Movies</Link>
                </header>
                <Routes>
                    <Route path='/' element={<Homepage />} />
                    <Route path='/movies' element={<MoviesPage />} />
                    <Route path='movies/:id' element={<GoToFilm />} />
                    <Route path='*' element={<NotFoundPage />} />
                </Routes>
            </div>
        </MoviesContext.Provider>
    )
}

export default Menu;
