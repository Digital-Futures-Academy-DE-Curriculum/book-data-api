import { Document } from "mongoose";

export default interface IBook extends Document {
    title: string;
    price: number;
    star_rating: number;
    in_stock: boolean;
    img_src: string;
}
