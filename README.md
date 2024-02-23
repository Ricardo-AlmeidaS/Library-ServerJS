## Library 

This project focuses on creating an API using Node.js, Express, and MongoDB for managing a library with CRUD (Create, Read, Update, Delete) operations for registering books and authors.

## Concepts utilized

- MVC (Model-View-Controller)
- SOLID
- Dependency Injection
- Repository pattern

## Installation

To run this project, you'll need to have Node.js and MongoDB installed on your system. Follow these steps:

1. Clone this repository.
2. Navigate to the project directory in your terminal.
3. Install dependencies by running the command: `npm install`
4. Start the server with: `node server.js`

## Routes

Note: This API utilizes JSON (JavaScript Object Notation) for data exchange. When interacting with the routes, ensure that your responses are in JSON format. Follow the 'Entities' topic to ensure that requests work properly.

| Action                     | Endpoint                                           | Description                                           |
|----------------------------|----------------------------------------------------|-------------------------------------------------------|
| List Books                 | [http://localhost:3000/books](http://localhost:3000/books)           | Endpoint to list all books                            |
| List Authors               | [http://localhost:3000/authors](http://localhost:3000/authors)       | Endpoint to list all authors                          |
| Add Book                   | [http://localhost:3000/books](http://localhost:3000/books)           | Send a POST request with book details in JSON         |
| Add Author                 | [http://localhost:3000/authors](http://localhost:3000/authors)       | Send a POST request with author details in JSON       |
| Update Book                | [http://localhost:3000/books/:id](http://localhost:3000/books/:id)   | Send a PUT request with updated book details          |
| Update Author              | [http://localhost:3000/authors/:id](http://localhost:3000/authors/:id) | Send a PUT request with updated author details        |
| Delete Book                | [http://localhost:3000/books/:id](http://localhost:3000/books/:id)   | Send a DELETE request to delete a book               |
| Delete Author              | [http://localhost:3000/authors/:id](http://localhost:3000/authors/:id) | Send a DELETE request to delete an author            |
| Search and Filtering Books | [http://localhost:3000/books/search](http://localhost:3000/books/search? (the req )) | Send a GET request to search and filter books       |

## Entities 
```json
[
    {
        "_id": "64fa88ef1c468255e84dce64",
        "title": "To Kill a Mockingbird",
        "author": {
            "_id": "64fa88a81c468255e84dce61",
            "name": "Harper Lee"
        },
        "publisher": "J.B. Lippincott & Co.",
        "pageCount": 281,
    }
]
```
![Entities](https://lh3.googleusercontent.com/pw/ABLVV85eRcG0BImNgG51ogTlKepQkVm0ou2Q3RHtebPjYs0LvQHn7e3TZ9XSRtQvmujmKErh_lSjvBPWGn2g7peTcNfASFiS679vSibW4af2qAATCDHP1SHAopAKuyA2ukfDhkzBwIz9DYdnAwo8wAvBr-IxlCmW1Oid0rLXn36ob7fPLutaXPpuELZCSihfLqcdapclDlcgzj5t22rHGd2xBlEQsNaLydtyhGYdv4RY6K-48AZohib0rAwrXlaoE-Pt0nUO366ZURjgS6hm5ELhDcpOIjzoJsgCKq8EIZG_AMZ-FEf-GtkWMZDJPKm92aQJPZqceQDUMocPFsfLbmifo42BimcxWIOLJHYJXyFccCe6xP1MI3Q3opvuvxbL62ZDY8pr_qfo2MHAH4O3F27xOKy5Xdnt2GuD_o4CtH3_y2jQ7JTj5EADWebGbrxThn1uxskG8YOAye9A-EWvyDGkS6acbuo0CK0PMsZcHyqZAd7E7oX9PEum1m1MF1U8q3X6aUbl9ixACXtoo5G3aQPDrEWWQbf0vxUpSon1dXc7sonbcnNtkOlmhq2Kp1zpr7IVgrs7IRn1kv893eSz_7Qrv6L7b-7T_piQPlLzpVFs3_xHa07D_TwP_89l4iNiNjsmJBS3Ub48nPLkl_y-_1PGn4dDWWyk8O-Cd2wdNuQE39fhAay_BfhApuBlsT6SnDMx4U9Xv0MRspnm_TBzPq1d3wnx9jk0-Yv5eH14-tydbEn2wkFVtDhjYXLYmFmSGvU5BarmithYtCmHZK8aeV-xntQnfXIMh69D1lUlD1tgVWvWgik6F2AsMEqwQfHQsCx_75p6LVVVsOVhClhPIfltiAcgi31fCzjXdm4kGj51JZynnwMVcwPuhF1Nor90g_CCfNu67YE4f6mqqCImZh_uR5dvBS2sWJ6KGAYWsT9SvRDjqGqHbDGyNP6l6gkf=w488-h312-s-no-gm?authuser=0)

## Testing with Postman

For testing the endpoints of this API, [Insomnia](https://insomnia.rest/download) was used. However, if you prefer to use [Postman](https://www.postman.com/), it's also available.

## Architecture

```bash
project-root-directory
├── src
│   ├── app.js
│   ├── config 
│   │   └── dbConfig.js
│   ├── Error
│   │   ├──badRequest.js
│   │   ├──baseErr.js
│   │   ├── notfound.js
│   │   └──validationerr.js
│   ├── controllers
│   │   ├── AuthoresController.js
│   │   └── booksController.js
│   ├── middleware
│   │   ├── errorHandling.js
│   │   ├── Handle404.js
│       └── pagination.js
│   ├── models
│   │   ├── Author.js
│   │   ├── Books.js
│   │   ├──globalValidation.js
│   │    └──index.js
│   └── routes
│       ├── index.js
│       ├── booksRoutes.js
│       └──authorsRoutes.js
├── package.json
├── .eslintrc.json
├── Server.js
└── README.md
```

## .env File Configuration
Note: This project necessitates the configuration of a .env file to handle sensitive environment variables, such as the MongoDB database connection string. It's advisable for users to set up this file with their own data.


## License

This project is licensed under the MIT License.


