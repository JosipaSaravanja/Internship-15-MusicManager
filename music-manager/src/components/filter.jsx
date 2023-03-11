import React from "react";
import { useEffect } from "react"

export const Filter = (props) => {
  const [genre, setGenre]=React.useState("");
  const [search, setSearch]=React.useState("");
  useEffect(()=>props.filterAlbums(genre, search), [search, genre])

  return (
    <div className="filter">
      <input className="unputFilter" onChange={(e)=>{setSearch(e.target.value)}} placeholder="Pretražite"/>

      <select className="selectFilter" onChange={(e)=>{setGenre(e.target.value)}}>()
        <option value="" selected>
          Svi žanrovi
        </option>
        <option value="Pop">Pop</option>
        <option value="Techno">Techno</option>
        <option value="Rock">Rock</option>
        <option value="Jazz">Jazz</option>
        <option value="Electronic">Electronic</option>
        <option value="Hip Hop">Hip Hop </option>
        <option value="Classical">Classical</option>
        <option value="Funk">Funk</option>
        <option value="Rap">Rap</option>
        <option value="Country">Country</option>
      </select>
      </div>
  );
};
