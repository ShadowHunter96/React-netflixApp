import "./DeleteAllMovies.css"

const DeleteAllMovies = (props)=>{
    return(
        <button className="delete-all-movies" onClick={props.deleteAll}>Smazat Všechny</button>
    )

}
 export default DeleteAllMovies