const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//JWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjU3NTc0Mjg1LCJleHAiOjE2NTgxNzkwODV9.j9LRcoOaQI2rC8DQ3z_QWwngkcYbe7oRGWGus09jqYE"

router.post("/login", async (request, response) => {
    
    console.log(request.body);

    if (request.body.email != "kevincristhian@outlook.com") {
        return response.status(400).json({
            erro: true,
            mensagem: "Usuário ou senha inválidos, email"
        });
    }

    if(!(await bcrypt.compare(request.body.password, "$2b$10$RLMx8STgcFygfOhnEut56.VuERBbS1AvdqumIcGxbxR7pHe8IwNR." ))){
        return response.status(400).json({
            erro: true,
            mensagem: "Usuário ou senha inválidos, senha "
        });
    }

    const token = jwt.sign({id:1}, "D6T889YM6049JWEI985I39HG024204GIN2G0U2GN240240420", {
        //expiresIn: 600 //10 min
        expiresIn: '7d' //7 dias
    });
 
    return response.json({
     erro: false,
     mensagem: "Login realizado com sucesso !",
     token: token
    });
 })

 module.exports = router;

