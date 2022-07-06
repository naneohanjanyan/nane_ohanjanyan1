import { useContext, useState, useEffect } from 'react'
import { MoviesContext } from "../Menu/Menu";

import { useParams } from 'react-router-dom'
// import { changedArr } from '../../renderMoves';
import './GoToFilm.css'

export function GoToFilm() {
    const { movies } = useContext(MoviesContext)
    const { id } = useParams();
    const [movie, setMovie] = useState({});

    useEffect(() => {
        setMovie(movies.find(v => v.id === Number(id)))
    }, []);

    return (
        <div className='GoToFilm' >
            <h3>{movie.name}</h3>
            <img src={movie.image} />
            <p>{movie.text}</p>
        </div>
    )

}

export default GoToFilm;