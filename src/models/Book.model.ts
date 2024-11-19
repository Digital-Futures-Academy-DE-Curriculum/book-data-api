import { Schema } from "mongoose";

import IBook from "../models/IBook.js";

const BookSchema = new Schema<IBook>({
    title: { type: String, required: true },
    price: {
        type: Number,
        required: true,
        validate: {
            validator: (v: number) => /^d+(\.d{1, 2})?$/.test(v.toString()),
            message: (props: { value: unknown }) =>
                `${props.value} is not a valid price!`,
        },
    },
    star_rating: {
        type: Number,
        required: true,
        validate: {
            validator: (v: number) => v >= 0 && v <= 5,
            message: (props: { value: unknown }) =>
                `${props.value} is not a valid star rating!`,
        },
    },
    in_stock: { type: Boolean, required: true },
    img_src: {
        type: String,
        required: true,
        validate: {
            validator: (v: string) => {
                return /^http:\/\/books\.toscrape\.com\/media\/cache\/[a-z0-9]{2}\/[a-z0-9]{2}\/[a-z0-9]{32}\.jpg$/.test(
                    v
                );
            },
            message: (props: { value: unknown }) =>
                `${props.value} is not a valid image link!`,
        },
    },
});

export { BookSchema };
