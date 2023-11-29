
export class Book {
    constructor(
      public id: number,
      public title: string,
      public author: string,
      public publication: string,
      public price: number,
      public genre: string,
      public publishedDate: Date,
      public country: string,
      public description: string
    ) {}
  }