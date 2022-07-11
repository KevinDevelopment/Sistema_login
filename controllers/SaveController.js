const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/cadastrar", async (request, response) => {

    //$2b$12$FokthYVHDBVUl.Z0w82wuOmZaEbGt3VlICWcVIC5oVyaDuFVvJ7J2
    const password = await bcrypt.hash("12345", 12);

    console.log(password);

    return response.json({
        erro: false,
        mensagem: "Cadastrar usuário"        
    });

});

module.exports = router;