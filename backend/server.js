const express = require("express");
const mongoose = require("mongoose");

const Product = require("./model/product.model");
const productRoute = require("./routes/product.route")
const app = express();

const port = 4000;

// middleware
app.use(express.json());

app.use(express.urlencoded({ extended: false }));

// route

app.use("/api/products", productRoute);



mongoose
  .connect(
    "mongodb+srv://meshach:fAhgvk7YXWsLVFto@cluster2.8szyj85.mongodb.net/crudapp?retryWrites=true&w=majority&appName=Cluster2"
  )
  .then(() => {
    console.log("connect to port", port);
    app.listen(port, () => {
      console.log("Server is running on port 4000");
    });
  })
  .catch(() => {
    console.log("there is an error");
  });
