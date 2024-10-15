# mangojelly
 
# Comic Book Store Backend

## Setup

1. Install dependencies:
    ```bash
    npm install
    ```

2. Run the server:
    ```bash
    node app.js
    ```


## API Endpoints

- `POST /api/comicBooks` - Create a new comic book
- `GET /api/comicBooks` - Retrieve all comic books
    - Query parameters:
        - `authorName` (optional) - Filter by author name
        - `yearOfPublication` (optional) - Filter by year of publication
        - `price` (optional) - Filter by price
        - `condition` (optional) - Filter by condition
        - `sortBy` (optional) - Sort by a specific field (e.g., `price:asc`, `yearOfPublication:desc`)
        - `page` (optional) - Page number for pagination
        - `limit` (optional) - Number of items per page
- `GET /api/comicBooks/:id` - Retrieve a comic book by ID
- `PATCH /api/comicBooks/:id` - Update a comic book
- `DELETE /api/comicBooks/:id` - Delete a comic book
