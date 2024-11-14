import ErrorMessages from "../constants/ErrorMessages";
import Category from "../models/Category.model";
import IBook from "../models/IBook";
import ICategory from "../models/ICategory";

export default class CategoriesService {
    getCategories: () => Promise<ICategory[]> = async () => {
        try {
            const categories = await Category.find();
            return categories;
        } catch (error: unknown) {
            console.log((error as Error).message);
            throw new Error(ErrorMessages.FETCH_CATEGORIES_ERROR);
        }
    };

    getCategoriesBooksAndCount: () => Promise<{
        [category: string]: {
            number_of_books: number;
            books: Partial<IBook>[];
        };
    }> = async () => {
        try {
            const categoriesAndBooks = await Category.find();
            const result: {
                [category: string]: {
                    number_of_books: number;
                    books: Partial<IBook>[];
                };
            } = {};

            categoriesAndBooks.forEach((category) => {
                result[category.category] = {
                    number_of_books: category.number_of_books,
                    books: category.books,
                };
            });

            return result;
        } catch (error: unknown) {
            console.log((error as Error).message);
            throw new Error(ErrorMessages.FETCH_CATEGORIES_AND_BOOKS_ERROR);
        }
    };

    getCategoriesBookCount: () => Promise<{
        [category: string]: number;
    }> = async () => {
        try {
            const categoriesAndBookNumber = await Category.find();
            const result: { [category: string]: number } = {};

            categoriesAndBookNumber.forEach((category) => {
                result[category.category] = category.number_of_books;
            });

            return result;
        } catch (error: unknown) {
            console.log((error as Error).message);
            throw new Error(ErrorMessages.FETCH_CATEGORIES_BOOK_COUNT_ERROR);
        }
    };

    getCategoriesBookCountAndPrices: () => Promise<{
        [category: string]: {
            number_of_books: number;
            book_prices: number[];
        };
    }> = async () => {
        try {
            const categoriesAndBookPrices = await Category.find();

            const result: {
                [category: string]: {
                    number_of_books: number;
                    book_prices: number[];
                };
            } = {};

            categoriesAndBookPrices.forEach((category) => {
                result[category.category] = {
                    number_of_books: category.number_of_books,
                    book_prices: category.books.map(
                        (book) => book.price
                    ) as number[],
                };
            });
            return result;
        } catch (error: unknown) {
            console.log((error as Error).message);
            throw new Error(ErrorMessages.CATEGORY_BOOKS_AND_COUNT_ERROR);
        }
    };

    // getCategoriesBooksAndPrices: () => Promise<void> = async () => {};
}
