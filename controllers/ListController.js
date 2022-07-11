const express = require("express");
const router = express.Router();

router.get("/", async (request, response) => {
    return response.json({
        erro: false,
        mensagem: "listar usuarios"
    })
});

module.exports = router;