const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/login", async (request, response) => {
    console.log(request.body);

    if (request.body.email != "kevincristhian@outlook.com") {
        return response.status(400).json({
            erro: true,
            mensagem: "Usuário ou senha incorretos, email"
        })
    }

    if (!(await bcrypt.compare(request.body.password, "$2b$12$FokthYVHDBVUl.Z0w82wuOmZaEbGt3VlICWcVIC5oVyaDuFVvJ7J2"))) {
        return response.status(400).json({
            erro: true,
            mensagem: "Usuário ou senha incorretos, senha"
        })
    }

    const token = jwt.sign({ id: 10 }, "D6FF7G8G9FF9UGFG0SGG577EHGHWR0G0WR0F0FE0QFE0Q", {
        //expiresIn: 60 //1 minuto
        expiresIn: '1d' // 1 dias
    });

    return response.json({
        erro: false,
        mensagem: "Login realizado com sucesso!",
        token: token
    });

});

module.exports = router;