const express = require('express');
const sequelize = require('./config/database.js'); // Caminho para o seu arquivo de configuração do banco
const Vaga = require('./models/Vaga.js'); // Caminho para o seu model de Vagas
const router = require('./routes/vagaRoutes.js');

const app = express();

app.use(express.json());
app.use(router)

const a = async () => {
    try{
        await sequelize.sync()
    } catch(e){
        console.log(e)
    }
}
    
a()
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});