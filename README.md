# Books to Scrape API

This is a simple API that provides the same data

Based on the user stories, here are the RESTful paths that follow good practices for APIs:

Retrieve all categories and the number of books in them:

Path: GET /categories/books/count
Description: This endpoint retrieves all categories along with the number of books in each category.
Retrieve the number of books in a particular category:

Path: GET /categories/:categoryId/books/count
Description: This endpoint retrieves the number of books in a specific category identified by categoryId.
Retrieve all book prices for all books in all categories:

Path: GET /books/prices
Description: This endpoint retrieves the prices of all books across all categories.
Retrieve all book prices for all books in a particular category:

Path: GET /categories/:categoryId/books/prices
Description: This endpoint retrieves the prices of all books in a specific category identified by categoryId.
