const inscricaoRouter = require('express').Router()
const { Sequelize, QueryTypes } = require('sequelize')

const sequelize = new Sequelize(process.env.DATABASE_URL,{
    dialectOptions: {
        ssl: {
                require: true,
                rejectUnauthorized: false
        }
    },
});

inscricaoRouter.get('/:id_turma/:id_aluno', async (req,res) => {
    const id_turma = req.params.id_turma
    const id_aluno = req.params.id_aluno

    const inscricao = await sequelize.query(`
    SELECT * FROM inscricao WHERE id_aluno = ${id_aluno} AND id_turma = ${id_turma}`, { type: QueryTypes.SELECT })
    res.json(inscricao)
})

module.exports = inscricaoRouter