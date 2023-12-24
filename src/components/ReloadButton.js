import "./ReloadButton.css"

const ReloadButton = (props)=>{
     return(
        <button className="reload-movies-button" onClick={props.reloadMovies}>Načíst Filmy</button>
     )
}

export default ReloadButton