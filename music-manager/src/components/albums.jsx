import { Album } from "./album";

export const Albums = (props) => {
  return (
    <div className="albums">
      {props.albums.map((data) => {
        return (
          <Album data={data} removeAlbum={props.removeAlbum}key={data.id}>
          </Album>
        );
      })}
    </div>
  );
};
