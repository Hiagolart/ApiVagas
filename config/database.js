const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgresql://hiago:S49C1Ap1t8GK_GELZdBCwg@decent-serpent-2474.jxf.gcp-us-east1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full')

const a = async () => {
  try {
    await sequelize.authenticate()
    console.log('Conectado com sucesso')
  } catch (error) {
    console.error('Erro ao conectar', error)
  }
}

a()

module.exports = sequelize;


