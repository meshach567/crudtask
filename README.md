# Node.js, Express, and MongoDB CRUD App

This is a simple guilde on how to build a CRUD (Create, Read, Update, Delete) management application using Node.js, Express.js and MongoDB

## Prerequisites

Before you begin, make sure you have the following installed:

- Node.js: https://node.js.org/
- MongoDB: https://www.mongodb.com/

## Setup

1. Clone this repository: git clone <repository-url>

2. Install dependecies: npm install

3. Start MongoDB: mongod

4. Start the server: npm start

##  Folder Structure

- `server.js`: Entry point of the application.

- `model/`: Contains MongoDB schema definitions.
- `routes/`: Contains route definition for crud operation
- `controllers/`: Contains controller logic for handling requests.
- `viewa/`: Contain view template if using sever-side rendering.
- `public/`: Contains static assets (e.g., CSS, JavaScript, HTML) if using client rendering 

## API Endpoints

- `GET /`: Get one Product
- `GET /api/products`: Get all products.
- `GET /api/products/:id`: Get product by ID.
- `POST /api/products/`: Create a new product.
- `PUT /api/products/:id`: Update a product by ID.
- `DELETE /api/product/:id`: Delete a product by ID.

## Testing 

You can test the Api endpoints using tools like Postman or Insomnia

## Contributing

Contributions are welcome! Fork the repository, make your changes, and submit a pull request.

## License

This project is licenced under the MIT License - 

## Contact

For any questions or feedback, feel free to contact [meshacharinze@gmail.com](mailto:meshacharinze@gmail.com)





