export const Album = (props) => {
  const compareDates = (date1) => {
    return (
      date1.getFullYear() == new Date().getFullYear() &&
      date1.getMonth() == new Date().getMonth() &&
      date1.getDate() == new Date().getDate()
      )
  };
  return (
    <div
      className="albumCard"
      style={
        compareDates(props.data.releaseDate)
          ? { borderColor: "rgb(138 43 226)" }
          : { borderColor: "black" }
      }
    >
      <div>Name: {props.data.name}</div>
      <div>Author: {props.data.author}</div>
      <div>Genre: {props.data.genre}</div>
      <div>Release year: {props.data.releaseYear}</div>
      <div>
        Date: {props.data.releaseDate.getFullYear()}. 
        {props.data.releaseDate.getMonth() + 1}. 
        {props.data.releaseDate.getDate()}.
      </div>
      <button className="removeButton" onClick={()=>{props.removeAlbum(props.data.id)}}>Remove it!</button>
    </div>
  );
};
