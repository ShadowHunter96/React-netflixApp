import "./Movie.css"
import data from "../data"
import MovieDeleteButton from "./MovieDeleteButton"
import { useState } from "react"
import ReloadButton from "./ReloadButton"
import DeleteAllMovies from "./DeleteAllMovies"

const Movie = () => {
    const[movieList, setMovieList] = useState(data)

    const deleteOneMovie = (idecko)=>{
        const filteredMovies = movieList.filter((onemovie)=>{
            return onemovie.id !== idecko
        })
        setMovieList(filteredMovies)
    }

    const reloadAllMovies = ()=>{
        setMovieList(data)
    }

    const deleteAllMoviesFunction = ()=>{
        setMovieList([])
    }



    return (
        <div className="all-movies">
            {
                movieList.map((onemovie) => {
                    const {id, image, title, age, tags, description} = onemovie

                    return <div className="one-movie" key={id}>
                        <img src={image}></img>
                        <h2>{title}</h2>
                        <p>{age}</p>
                        <p>{tags}</p>
                        <p>{description}</p>
                        <MovieDeleteButton  deleteMovie={()=>deleteOneMovie(id)}/>
                        </div>
                    }
                )
                
            }
            <DeleteAllMovies deleteAll={deleteAllMoviesFunction} />
             <ReloadButton reloadMovies={reloadAllMovies} /> 

        </div>
    )   

}

export default Movie