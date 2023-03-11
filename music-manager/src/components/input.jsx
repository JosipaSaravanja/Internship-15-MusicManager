import React from "react";

export const Input = (props) => {
  const [name, setName] = React.useState("");
  const [author, setAuthor] = React.useState("");
  const [genre, setGenre] = React.useState("");
  const [releaseYear, setReleaseYear] = React.useState("");
  const [releaseDate, setReleseDate] = React.useState("");

  const handleClick=()=>{
     if(!name || !author || !genre || !releaseDate){
      alert("Popunite podatke do kraja")
     }else{
      props.addAlbum(name, author, genre, releaseYear, releaseDate)
     }
  }

  return (
    <div className="input">
      <input className="name" placeholder="Name" onChange={e=>setName(e.target.value)}></input>
      <input className="author" placeholder="Author" onChange={e=>setAuthor(e.target.value)}></input>
      <input className="year" placeholder="Release year" onChange={e=>setReleaseYear(e.target.value)} type="year"></input>
      <input className="date" placeholder="Release date yyyy-mm-dd" onChange={e=>setReleseDate(e.target.value)} type="date"></input>
      
      <select onChange={e=>setGenre(e.target.value)} className="selectInput">
        <option value="" disabled selected>
          Odaberite žanr
        </option>
        <option value="Pop">Pop</option>
        <option value="Techno">Techno</option>
        <option value="Rock">Rock</option>
        <option value="Jazz">Jazz</option>
        <option value="Electronic">Electronic</option>
        <option value="Hip Hop ">Hip Hop </option>
        <option value="Classical">Classical</option>
        <option value="Funk">Funk</option>
        <option value="Rap">Rap</option>
        <option value="Country">Country</option>
      </select>

      <button onClick={()=>{handleClick()}}>Dodaj album</button>
    </div>
  );
};
