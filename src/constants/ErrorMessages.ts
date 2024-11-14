export default class ErrorMessages {
    static readonly FILE_NOT_FOUND: string = "404: File Not Found";
    static readonly INVALID_CATEGORY_ID: string = "Invalid Category ID";
    static readonly FETCH_CATEGORIES_ERROR: string =
        "Error while fetching categories";
    static readonly FETCH_CATEGORIES_BOOK_COUNT_ERROR: string =
        "Error while fetching categories and number of books";
    static readonly FETCH_CATEGORIES_AND_BOOKS_ERROR: string =
        "Error while fetching categories and books";
    static readonly CATEGORY_ID_REQUIRED: string = "Category ID is required";
    static readonly CATEGORY_ID_NOT_FOUND: string =
        "Category not found for id: ";
    static readonly CATEGORY_BOOK_COUNT_ERROR: string =
        "Error while fetching book count for category with id: ";
    static readonly CATEGORY_BOOK_ERROR: string =
        "Error while fetching books for category with id: ";
    static readonly CATEGORY_BOOKS_AND_COUNT_ERROR: string =
        "Error while fetching books and count for category with id: ";
}
