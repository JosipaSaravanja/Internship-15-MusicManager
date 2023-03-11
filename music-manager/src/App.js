import { Input } from "./components/input";
import { Filter } from "./components/filter";
import { Albums } from "./components/albums";
import { newAlbum, albumsCollection } from "./data";
import React from "react";

function App() {
  const sortAlbums = (array) => {//optimize???
    return array
      .sort((a, b) => {/*(a.name > b.name) ? 1 : ((a.name < b.name) ? -1 : 0)*/
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
    setGlobalData([...data]);
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
    setGlobalData([...data]);
  };

  const [data, setData] = React.useState(sortAlbums(albumsCollection));
  const [globalData, setGlobalData] = React.useState(sortAlbums(albumsCollection));

  const filterAlbums=(genre, search)=>{
    setData([...globalData])

    if(!genre || !search){
      setData([...globalData])
    }
    if(genre){
      setData(prev=>[...prev.filter(x => x.genre==genre)])
    }

    if(search){
      setData(prev=>[...prev.filter(x => x.name.toLowerCase().includes(search.toLowerCase()) || x.author.toLowerCase().includes(search.toLowerCase()))])
    }
    
    console.log(globalData)
    console.log(data)

  }

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
