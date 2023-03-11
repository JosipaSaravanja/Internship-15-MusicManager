import { v4 as uuidv4 } from 'uuid';

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

export const albumsCollection=[
    new newAlbum(uuidv4(), "Meddle", "Pink Floyd", "Rock", 1971, new Date("1971-1-4")),
    new newAlbum(uuidv4(), "hi", "Pink Floyd", "Rock", 1971, new Date("2023-3-11")),
    new newAlbum(uuidv4(), "Remek Depo","Beograd (2) ", "Electronic", 1983, new Date("1983-1-1")),//nisam nasla datum
    new newAlbum(uuidv4(), "hi", "Pink Floyd", "Rock", 1971, new Date("2023-3-11")),
    new newAlbum(uuidv4(), "hi", "Pink Floyd", "Rock", 1971, new Date("2023-3-11")),
    new newAlbum(uuidv4(), "hi", "Pink Floyd", "Rock", 1971, new Date("2023-3-11")),
    new newAlbum(uuidv4(), "hi", "Pink Floyd", "Rock", 1971, new Date("2023-3-11")),
    new newAlbum(uuidv4(), "hi", "Pink Floyd", "Rock", 1971, new Date("2023-3-11")),
    new newAlbum(uuidv4(), "hi", "Pink Floyd", "Rock", 1971, new Date("2023-3-11")),
    new newAlbum(uuidv4(), "hi", "Pink Floyd", "Rock", 1971, new Date("2023-3-11"))
]