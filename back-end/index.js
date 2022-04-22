require("dotenv/config");
require("./db");

const express = require ("express");

const app = express()
const cors = require("cors")


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const routes = require("./routes");
app.use('/user', routes)
app.use('/project', routes)



app.listen(process.env.PORT || 3000);