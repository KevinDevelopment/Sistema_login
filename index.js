const express = require("express");
const app = express();
const listcontroller = require("./controllers/ListController");
const savecontroller = require("./controllers/SaveController");
const logincontroller = require("./controllers/LoginController");

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use("/", listcontroller);
app.use("/", savecontroller);
app.use("/", logincontroller);


const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
});  