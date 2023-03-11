import { v4 as uuidv4 } from "uuid";

export class newAlbum {
  constructor(id, name, author, genre, releaseYear, releaseDate) {
    this.id = id;
    this.name = name;
    this.author = author;
    this.genre = genre;
    this.releaseYear = releaseYear;
    this.releaseDate = releaseDate;
  }
}

export const albumsCollection = [
  /*
new newAlbum(uuidv4(), "Meddle", "Pink Floyd", "Rock", 1971, new Date("1971-1-4")),
new newAlbum(uuidv4(), "hi", "Pink Floyd", "Rock", 2023, new Date("2023-3-11")),
new newAlbum(uuidv4(), "Remek Depo","Beograd (2) ", "Electronic", 1983, new Date("1983-1-1")),//nisam nasla datum*/
  new newAlbum(uuidv4(), "b", "b", "Rock", 12, new Date("2021-1-1")),
  new newAlbum(uuidv4(), "a", "b", "Rock", 11, new Date("2021-1-1")),
  new newAlbum(uuidv4(), "z", "a", "rock", 10, new Date("2021-1-1")),
  new newAlbum(uuidv4(), "t", "a", "Rock", 9, new Date("2021-1-1")),

  new newAlbum(uuidv4(), "b", "b", "Rock", 8, new Date("2022-1-1")),
  new newAlbum(uuidv4(), "a", "b", "Rock", 7, new Date("2022-1-1")),
  new newAlbum(uuidv4(), "c", "a", "Rock", 6, new Date("2022-1-1")),
  new newAlbum(uuidv4(), "c", "a", "rock", 5, new Date("2022-1-1")),

  new newAlbum(uuidv4(), "b", "b", "Rock", 4, new Date("2023-1-1")),
  new newAlbum(uuidv4(), "a", "b", "Rock", 3, new Date("2023-1-1")),
  new newAlbum(uuidv4(), "e", "a", "Rock", 2, new Date("2023-1-1")),
  new newAlbum(uuidv4(), "d", "a", "Rock", 1, new Date("2023-1-1")),
];
