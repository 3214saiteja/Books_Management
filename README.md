# Books Management API

A RESTful API built with **Node.js, Express, and MongoDB** for managing books. This API supports **CRUD operations**, data validation, and error handling.

## Features

- **CRUD Operations** (Create, Read, Update, Delete)
- **MongoDB Integration** using Mongoose
- **Data Validation** to ensure valid book entries
- **Error Handling** with proper HTTP status codes
- **Basic API Tests** using Jest/Mocha (if implemented)
- **Modular Structure** with Routes, Controllers, and Models

---

## Setup Instructions

### 1️ **Clone the Repository**

```sh
git clone https://github.com/3214saiteja/Books_Management.git
cd Books_Management

### 2 Install Dependencies
npm install


### 3 Configure Environment Variables
PORT=5000
MONGO_URI=mongodb://localhost:5000/booksdb

### 4 Start the Server
npm start

### Testing with Postman
- Import the provided Postman Collection (postman_collection.json) into Postman.
- Run API requests using the provided endpoints.


## API Endpoints

### Fetch All Books (GET)
 curl -X GET http://localhost:5000/books

### Add a New Book (POST)
curl -X POST http://localhost:5000/books \
     -H "Content-Type: application/json" \
     -d '{"title": "The Alchemist", "author": "Paulo Coelho", "publishedDate": "1988-01-01", "genre": "Fiction"}'

### Update a Book (PUT)
curl -X PUT http://localhost:5000/books/BOOK_ID \
     -H "Content-Type: application/json" \
     -d '{"title": "Updated Title"}'

### Delete a Book (DELETE)
curl -X DELETE http://localhost:5000/books/BOOK_ID

### Running Tests (If Implemented)
npm test

```
