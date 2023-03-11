import { Input } from "./components/input";
import { Filter } from "./components/filter";
import { Albums } from "./components/albums";
import { newAlbum, albumsCollection } from "./data";
import React from "react";

function App() {
  const sortAlbums=(array)=>{ //optimize???
    return array.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
    }
    if (a.name < b.name) {
        return -1;
    }
    return 0;
    }).sort((a, b) => {
      if (a.author > b.author) {
        return 1;
    }
    if (a.author < b.author) {
        return -1;
    }
    return 0;
    }).sort((a, b) => b.releaseDate-a.releaseDate)
  }

  const removeAlbum=(id)=>{  
    setData(prev => [...prev.filter(album => album.id !== id)])
    console.log(data)
  }

  const addAlbum=()=>{

  }
  
  const [data, setData] = React.useState(sortAlbums(albumsCollection));
  
  return (
    <div className="App">
      <div className="content">
        <div className="inputAndFilter">
          <Input addAlbum={addAlbum}></Input>
          <Filter></Filter>
        </div>

        <Albums removeAlbum={removeAlbum} albums={data}></Albums>
      </div>
    </div>
  );
}

export default App;
