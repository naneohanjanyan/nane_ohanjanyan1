import { Link } from 'react-router-dom'
import Button from '../../Button/Button';
import '../../App.css';
// { movie, deleteMovie }

export function MoviesRender({movies, deleteMovie}) {
    return movies.map((value) => {
        return (
            <div className="style" id={value.name}>
                <p className="title">{value.name}</p>
                <img src={value.image} />
                <p className="description">
                    {value.text}
                </p>
                <Button onClick={() => deleteMovie(value.id)}>Delete</Button>
                <Link className='Link' to={`/movies/${value.id}`}> <Button>Go to</Button></Link>
            </div>
        );
    });

}

export default MoviesRender;