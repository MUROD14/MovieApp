export default function Movie(props) {
    const {Title, Year, imdbID, Type, Poster} = props;
    return(
        <div classNam="card movie">
            <div classNam="card-image waves-effect waves-block waves-light">
          <img classNam="activator" src={Poster} />
        </div>
        <div classNam="card-content">
          <span classNam="card-title activator grey-text text-darken-4">{Title}<i classNam="material-icons right">more_vert</i></span>
          <p>{Year} <span className="right">{Type}</span></p>   
        </div>
        <div classNam="card-reveal">
          <span classNam="card-title grey-text text-darken-4">{Title}<i classNam="material-icons right">close</i></span>
          <p>Here is some more information about this product that is only revealed once clicked on.</p>
        </div>
      </div>
    )
}