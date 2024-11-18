import IBook from "@models/IBook";

export default interface ICategory extends Document {
    category: string;
    link: string;
    number_of_books: number;
    books: Partial<IBook>[];
}
