export default class CreateBookDto {
    readonly bookID: number;
    readonly name: string;
    readonly userID: number;
    readonly genreIDs: number[];
  }