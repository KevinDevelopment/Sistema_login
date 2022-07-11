const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { application } = require("express");



router.post("/cadastrar", async (request, response) => {

    //$2b$10$RLMx8STgcFygfOhnEut56.VuERBbS1AvdqumIcGxbxR7pHe8IwNR.

   const password =  await bcrypt.hash('12345', 10);

   console.log(password);

   return response.json({
    erro: false,
    mensagem: "Cadastrar usuário"
   });

});

module.exports = router;