import React from "react";

export const Input = (props) => {  return (
    <div className="input">
      <input className="name" placeholder="Name"></input>
      <input className="author" placeholder="Author"></input>
      <button onClick={props.addAlbum()}>Dodaj album</button>
    </div>
  );
};
