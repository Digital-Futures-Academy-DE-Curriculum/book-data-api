const fs = require("fs");
const { ObjectId } = require("mongodb");

// Read the original JSON data
fs.readFile("category_data.json", "utf8", (err, data) => {
    if (err) {
        console.error("Error reading the file:", err);
        return;
    }

    // Parse the JSON data
    const originalData = JSON.parse(data);

    // Transform the data
    const transformedData = originalData.map((category) => {
        category.books = category.books.map((book) => ({
            _id: new ObjectId(),
            ...book,
        }));
        return category;
    });

    // Write the transformed data to a new JSON file
    fs.writeFile(
        "transformed_category_data.json",
        JSON.stringify(transformedData, null, 4),
        (err) => {
            if (err) {
                console.error("Error writing the file:", err);
                return;
            }
            console.log(
                "Data transformed and saved to transformed_category_data.json"
            );
        }
    );
});
