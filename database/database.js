const Sequelize = require("sequelize");
const connection = new Sequelize('kevin', 'root', '12345', {
    host: "localhost",
    dialect: "mysql",
    logging: false
});

 connection.authenticate().then(() => {
    console.log("Conectado ao banco de dados!")
 }).catch(erro => {
    console.log(`Ops!, houve um erro ${erro}`)
 });

 module.exports = connection;