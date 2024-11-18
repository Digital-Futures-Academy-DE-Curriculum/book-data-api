import ErrorMessages from "@constants/ErrorMessages";
import Category from "@models/Category.model";
import IBook from "@models/IBook";

export default class CategoryService {
    getCategoryBookCount: (categoryId: string) => Promise<{
        [category: string]: number;
    }> = async (categoryId) => {
        try {
            const categoryNumberOfBooks = await Category.findById(
                categoryId,
                "category number_of_books"
            );
            if (!categoryNumberOfBooks) {
                throw new Error(
                    `${ErrorMessages.CATEGORY_ID_NOT_FOUND}${categoryId}`
                );
            }
            return {
                [categoryNumberOfBooks.category]:
                    categoryNumberOfBooks.number_of_books,
            };
        } catch (error: unknown) {
            console.log((error as Error).message);
            throw new Error(
                (error as Error).message ||
                    `${ErrorMessages.FETCH_CATEGORIES_BOOK_COUNT_ERROR}${categoryId}`
            );
        }
    };

    getCategoryBooksAndCount: (categoryId: string) => Promise<{
        [category: string]: {
            number_of_books: number;
            books: Partial<IBook>[];
        };
    }> = async (categoryId) => {
        try {
            const categoryBooks = await Category.findById(
                categoryId,
                "category number_of_books books"
            );
            if (!categoryBooks) {
                throw new Error(
                    `${ErrorMessages.CATEGORY_ID_NOT_FOUND}${categoryId}`
                );
            }
            return {
                [categoryBooks.category]: {
                    number_of_books: categoryBooks.number_of_books,
                    books: categoryBooks.books,
                },
            };
        } catch (error: unknown) {
            console.log((error as Error).message);
            throw new Error(
                (error as Error).message ||
                    `${ErrorMessages.CATEGORY_BOOK_ERROR}${categoryId}`
            );
        }
    };

    getCategoryBookPrices: (categoryId: string) => Promise<{
        [category: string]: {
            number_of_books: number;
            book_prices: number[];
        };
    }> = async (categoryId) => {
        try {
            const categoryBookPrices = await Category.findById(
                categoryId,
                "category number_of_books books"
            );

            if (!categoryBookPrices) {
                throw new Error(
                    `${ErrorMessages.CATEGORY_ID_NOT_FOUND}${categoryId}`
                );
            }

            return {
                [categoryBookPrices.category]: {
                    number_of_books: categoryBookPrices.number_of_books,
                    book_prices: categoryBookPrices.books.map(
                        (book) => book.price
                    ) as number[],
                },
            };
        } catch (error: unknown) {
            console.log((error as Error).message);
            throw new Error(
                `Error while fetching book prices for category ${categoryId}`
            );
        }
    };
}
