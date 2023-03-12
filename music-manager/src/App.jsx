import React from "react";
import { Input } from "./components/input";
import { Filter } from "./components/filter";
import { Albums } from "./components/albums";
import { newAlbum, albumsCollection } from "./data";

export default function App() {
  const sortAlbums = (array) => {
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
      .sort((a, b) => b.releaseYear - a.releaseYear);
  };

  const addAlbum = (name, author, newgenre, releaseYear, releaseDate) => {
    if (globalData.length >= 10) {
      setLenghtError("visible")
      return;
    }
    setLenghtError("hidden");

    if(!genre && !search) { 
      setData((prev) =>
      sortAlbums([
        ...prev,
        new newAlbum(name, author, newgenre, releaseYear, new Date(releaseDate)),
      ])
    );
    }
    setGlobalData((prev) =>
      sortAlbums([
        ...prev,
        new newAlbum(name, author, newgenre, releaseYear, new Date(releaseDate)),
      ])
    );
  };

  const removeAlbum = (id) => {
    setData((prev) => [...prev.filter((album) => album.id !== id)]);
    setGlobalData((prev) => [...prev.filter((album) => album.id !== id)]);
  };

  const filterAlbums = (genre, search) => {
    setData([...globalData]);
    console.log(data)
    setGenre(genre);
    setSearch(search);

    if (genre) {
      setData((prev) => [...prev.filter((x) => x.genre == genre)]);
    }

    if (search) {
      setData((prev) => [
        ...prev.filter((x) =>
          x.name.toLowerCase().includes(search.toLowerCase())
        ),
      ]);
    }
  };

  const [inputError, setInputError] = React.useState("hidden");
  const [lenghtError, setLenghtError] = React.useState("hidden");
  const [genre, setGenre] = React.useState("");
  const [search, setSearch] = React.useState("");

  const [data, setData] = React.useState(sortAlbums(albumsCollection));
  const [globalData, setGlobalData] = React.useState(
    sortAlbums(albumsCollection)
  );

  
  return (
    <div className="App">
    <div className={lenghtError}>Ne možete imati više od 10 albuma.</div>
    <div className={inputError}>Unesite sve potrebne podatke.</div>
      <div className="inputAndFilter">
        <Input
          addAlbum={addAlbum}
          error={() => {
            setInputError("visible");
          }}
          removeError={() => {
            setInputError("hidden");
          }}>
          Unesite sve podatke
        </Input>
        <Filter filterAlbums={filterAlbums}></Filter>
      </div>
      <Albums removeAlbum={removeAlbum} albums={data}></Albums>
    </div>
  );
}
