import { Schema, model } from "mongoose";

import { BookSchema } from "@models/Book.model";
import ICategory from "@models/ICategory";

const CategorySchema = new Schema<ICategory>({
    category: { type: String, required: true },
    link: {
        type: String,
        required: true,
        validate: {
            validator: (v: string) => {
                return /^(http:\/\/www.books.toscrape.com\/catalogue\/category\/books\/[a-z-]+_([0-9]+)\/index.html)$/.test(
                    v
                );
            },
            message: (props: { value: unknown }) =>
                `${props.value} is not a valid link!`,
        },
    },
    number_of_books: {
        type: Number,
        required: true,
        validate: {
            validator: Number.isInteger,
            message: (props: { value: unknown }) =>
                `${props.value} is not an integer!`,
        },
    },
    books: {
        type: [BookSchema],
        required: true,
    },
});

const Category = model<ICategory>(
    "Category",
    CategorySchema,
    "book_categories"
);

export default Category;
