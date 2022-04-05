require("dotenv/config");
require("./db");

const express = require ("express");

const  swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./swagger.json');

const app = express();
const cors = require("cors")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));


app.listen(process.env.PORT || 3000);