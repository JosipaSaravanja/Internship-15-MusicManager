export const Album = (props) => {
  const compareDates = (date1) => {
    if (
      date1.getFullYear() == new Date().getFullYear() &&
      date1.getMonth() == new Date().getMonth() &&
      date1.getDate() == new Date().getDate()
    ) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <div
      className="albumCard"
      style={
        compareDates(props.data.releaseDate)
          ? { borderColor: "blueviolet" }
          : { borderColor: "black" }
      }
    >
      <div>Name: {props.data.name}</div>
      <div>Author: {props.data.author}</div>
      <div>Genre: {props.data.genre}</div>
      <div>Release year: {props.data.releaseYear}</div>
      <div>
        Date: {props.data.releaseDate.getFullYear()}-
        {props.data.releaseDate.getMonth() + 1}-
        {props.data.releaseDate.getDate()}
      </div>
      <button className="removeButton" onClick={()=>{props.removeAlbum(props.data.id)}}>Remove it!</button>
    </div>
  );
};
