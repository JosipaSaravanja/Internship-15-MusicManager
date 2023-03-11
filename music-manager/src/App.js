import {Input} from "./components/input";
import {Filter} from "./components/filter";
import {Albums} from "./components/albums";
import {newAlbum, albumsCollection} from "./data"

function App() {
  return (
    <div className="App">
    <div className="content">
      <div className="inputAndFilter"><Input></Input>
    <Filter></Filter></div>
      
      <Albums albums={albumsCollection}></Albums>

      </div>
    </div>
  );
}

export default App;
