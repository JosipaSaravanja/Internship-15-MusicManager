import React from "react";

export const Input = (props) => {
  const [name, setName] = React.useState("");
  const [author, setAuthor] = React.useState("");
  const [genre, setGenre] = React.useState("");
  const [releaseDate, setReleseDate] = React.useState("");

  const handleClick=()=>{
     
  }

  return (
    <div className="input">
      <input className="name" placeholder="Name" onChange={e=>genre=e.target.name}></input>
      <input className="author" placeholder="Author" onChange={e=>genre=e.target.author}></input>
      <input className="date" placeholder="Release date yyyy-mm-dd" onChange={e=>genre=e.target.author}></input>
      
      <select onChange={e=>genre=e.target.value} className="selectInput">
        <option value="" disabled selected>
          Odaberite žanr
        </option>
        <option value="Pop">Pop</option>
        <option value="Techno">Techno</option>
        <option value="Rock">Rock</option>
        <option value="Jazz">Jazz</option>
        <option value="Electronic">Electronic</option>
        <option value="Classical">Classical</option>
        <option value="Funk">Funk</option>
        <option value="Rap">Rap</option>
      </select>

      <button onClick={()=>{handleClick()}}>Dodaj album</button>
    </div>
  );
};
