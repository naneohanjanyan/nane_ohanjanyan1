import { useEffect, useState, useRef, useContext } from "react";
import { MoviesContext } from "../Menu/Menu";

import Modal from "../../Modal/Modal";
import Button from "../../Button/Button";
import moviesContainer from "../../MoviesContainer";
import MoviesRender from "./MoviesRender";

// import { moviesFilter } from './moviesFilter';
// import { changedArr, RenderMovies } from '../../renderMoves';
import Spider from '../../images/download.jpeg';


export function MoviesPage() {

  const { movies, setMovies } = useContext(MoviesContext);


  const [name, setName] = useState('');
  const [filtered, setFiltered] = useState([movies]);

  const [count, setCount] = useState(moviesContainer.length);
  // const [newArr, setNewArr] = useState([]);
  const [show, setShow] = useState(false);
  const [newFilmName, setNewFilmName] = useState('');
  const [newFilmDesc, setNewFilmDesc] = useState('');
  const refNewFilmNameInputClear = useRef();
  const refNewFilmDescInputClear = useRef();

  useEffect(() => {
    // setNewArr(moviesFilter(name));
    const temp = movies.filter((value) =>
      value.name.toLowerCase().substring(0, name.length) ===
      name.toLowerCase())
      console.log(temp)
    // setFiltered(movies.filter(
    //   (value) =>
    //     value.name.toLowerCase().substring(0, name.length) ===
    //     name.toLowerCase()))
    setFiltered(temp);
  }, [name]);

  function deleteMovie(id) {
    // setMovies(movies.filter((el) => el.id !== id));
    setMovies(movies.filter(el => el.id !== id));
    setCount(movies.length - 1);

  }

  function addMovie() {
    setShow(false);
    const createdArr = {
      id: Date.now(),
      name: `${newFilmName}`,
      image: Spider,
      text: `${newFilmDesc}`
    };
    // movies.push(createdArr)
    setMovies(movies.push(createdArr));
    setCount(movies.length);
    refNewFilmNameInputClear.current.value = '';
    refNewFilmDescInputClear.current.value = '';
  }


  return (
    <div id="App">
      <div className="header">
        <div className="count">count: {count}</div>
        <input
          id="input"
          type="text"
          placeholder="search"
          onChange={(event) => {
            setTimeout(() => setName(event.target.value), 500);
          }}
        ></input>
        <Button onClick={() => setShow(true)}>add</Button>
        <Modal title="My Modal" onClose={() => setShow(false)} show={show}>
          <p>Add film
            <Button onClick={() => setShow(false)}>X</Button>
          </p>
          <div className="modalContent">
            <input type="text" placeholder="Film name" ref={refNewFilmNameInputClear} className="filmName style__"
              onChange={(event) => setNewFilmName(event.target.value)} />
            <input type="text" placeholder="description" ref={refNewFilmDescInputClear} className="description style__"
              onChange={(event) => setNewFilmDesc(event.target.value)} />
            <Button onClick={addMovie}>Add</Button>
          </div>
        </Modal>
      </div>
      <div id="films">
        <MoviesRender movies={filtered} deleteMovie={deleteMovie} />
        {/* <RenderMovies newArr={newArr} setArr={setNewArr} setCount={setCount} /> */}
      </div>
    </div>
  );
}

export default MoviesPage;
