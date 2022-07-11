const jwt = require("jsonwebtoken");
const { promisify } = require("util");

module.exports = {
    eAdmin: async function (request, response, next) {
        const authHeader = request.headers.authorization;
        //console.log(authHeader);
        if (!authHeader) {
            return response.status(400).json({
                erro: true,
                mensagem: "Erro: Necessário login para acessar a página, falta o token A"
            })
        }

        const [, token] = authHeader.split(' ');
        console.log(`Token: ${token}`);

        if (!token) {
            return response.status(400).json({
                erro: true,
                mensagem: "Erro: Necessário login para acessar a página, falta o token B"
            })
        }

        try {
            const decode = await promisify(jwt.verify)(token, "D6FF7G8G9FF9UGFG0SGG577EHGHWR0G0WR0F0FE0QFE0Q");
            request.userId = decode.id;
            return next();
        } catch (erro) {
            return response.status(400).json({
                erro: true,
                mensagem: "Erro: Necessário login para acessar a página, token invalido"
            })
        }

    }
};