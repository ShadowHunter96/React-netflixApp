import "./MovieDeleteButton.css"

const MoveDeleteButton = (props)=>{
    return(
        <button className="movie-delete-button" onClick={props.deleteMovie}>Vymazat film</button>
    )

}
export default MoveDeleteButton