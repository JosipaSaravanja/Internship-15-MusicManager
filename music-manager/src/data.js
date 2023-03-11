import { v4 as uuidv4 } from "uuid";

export class newAlbum {
  constructor(name, author, genre, releaseYear, releaseDate) {
    this.id = uuidv4();
    this.name = name;
    this.author = author;
    this.genre = genre;
    this.releaseYear = releaseYear;
    this.releaseDate = releaseDate;
  }
}

export const albumsCollection = [
  /*
new newAlbum("Meddle", "Pink Floyd", "Rock", 1971, new Date("1971-1-4")),
new newAlbum("hi", "Pink Floyd", "Rock", 2023, new Date("2023-3-11")),
new newAlbum("Remek Depo","Beograd (2) ", "Electronic", 1983, new Date("1983-1-1")),//nisam nasla datum*/

  new newAlbum("b", "b", "Rock", 8, new Date("2022-1-1")),
  new newAlbum("a", "b", "Rock", 7, new Date("2022-1-1")),
  new newAlbum("c", "a", "Rock", 6, new Date("2022-1-1")),
  new newAlbum("c", "a", "rock", 5, new Date("2022-1-1")),

  new newAlbum("b", "b", "Rock", 4, new Date("2023-1-1")),
  new newAlbum("a", "b", "Rock", 3, new Date("2023-1-1")),
  new newAlbum("e", "a", "Rock", 2, new Date("2023-1-1")),
  new newAlbum("d", "a", "Rock", 1, new Date("2023-3-11")),
];
