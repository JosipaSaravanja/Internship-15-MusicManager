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
  new newAlbum("Meddle", "Pink Floyd ", "Rock", 1971, new Date("2002-10-30")),
  new newAlbum("Remek Depo", "Beograd (2)", "Electronic",1983, new Date("2023-12-01")),
  new newAlbum("Kiša Metaka", "Kiša Metaka", "Hip Hop", 2022, new Date("2022-1-1")), 
  new newAlbum("Arrival", "ABBA", "Pop", 1976, new Date("1976-10-11")),
  new newAlbum("Paul Anka", "Paul Anka Sings His Big 15", "Pop", 1960, new Date("1998-10-11")),
  new newAlbum("Without Fear", "Dermot Kennedy ", "Country", 2019, new Date("2018-11-04")),
];
