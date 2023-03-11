import { Input } from "./components/input";
import { Filter } from "./components/filter";
import { Albums } from "./components/albums";
import { newAlbum, albumsCollection } from "./data";
import React from "react";

function App() {
  const sortAlbums = (array) => {
    //optimize???
    return array
      .sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      })
      .sort((a, b) => {
        if (a.author > b.author) {
          return 1;
        }
        if (a.author < b.author) {
          return -1;
        }
        return 0;
      })
      .sort((a, b) => b.releaseDate - a.releaseDate);
  };

  const removeAlbum = (id) => {
    setData((prev) => [...prev.filter((album) => album.id !== id)]);
  };

  const addAlbum = (name, author, genre, releaseDate) => {
    if (data.length >= 10) {
      alert("Ne možete unijeti više od 10 albuma");
    } else {
      setData((prev) =>
        sortAlbums([
          ...prev,
          new newAlbum(
            name,
            author,
            genre,
            new Date(releaseDate).getFullYear(),
            new Date(releaseDate)
          ),
        ])
      );
    }
  };

  const [data, setData] = React.useState(sortAlbums(albumsCollection));

  const filterAlbums=(genre, search)=>{
    if(genre){
      setData(prev=>[...prev.filter(x => x.genre==genre)])
    }
    if(search){
      setData(prev=>[...prev.filter(x => Object.values(x).includes(search))])
    }    
    console.log(data)
  }

console.log(data)
  return (
    <div className="App">
      <div className="content">
        <div className="inputAndFilter">
          <Input addAlbum={addAlbum}></Input>
          <Filter filterAlbums={filterAlbums}></Filter>
        </div>

        <Albums removeAlbum={removeAlbum} albums={data}></Albums>
      </div>
    </div>
  );
}

export default App;
