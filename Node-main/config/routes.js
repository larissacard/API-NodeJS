const express = require('express')
const routes = express.Router()

let pessoas = [
    {'1':{ Nome: 'Larissa', Profissao: 'frontEnd', Tarefas: 'tar'} },
    {'2':{ Nome: 'Dayanne', Profissao: 'BackEnd', Tarefas: 'tar'} },
    {'3':{ Nome: 'Iara', Profissao: 'BD', Tarefas: 'tar'} }
]

let projetos = [
    {'1':{ Nome: 'Pousada', Equipe: 'Equipe 1', Tarefas: 'Tarefa 1'} },
    {'2':{ Nome: 'API', Equipe: 'Equipe 2', Tarefas: 'Tarefa 1'} },
    {'3':{ Nome: 'GP-Inovação', Equipe: 'Equipe 3', Tarefas: 'Tarefa 1'} }
]

let equipes = [
    {'1':{ Nome: 'equipe 1', Membros: 'Array', Projetos: 'pro'} },
    {'2':{ Nome: 'equipe 2', Membros: 'Array', Projetos: 'pro'} },
    {'3':{ Nome: 'equipe 3', Membros: 'Array', Projetos: 'pro'} }
]
routes.put('/:id', (req,res) =>{
    const id = req.params.id
    const Nome = req.body
    pessoas[id] = Nome
    
    return res.json(pessoas)
     })

//GET -> selecionar
routes.get('/', (req, res) => {
    return res.json(pessoas)
})
//POST -> inserir
routes.post('/add', (req, res) => {
    const body = req.body

    if (!body)
        return res.status(400).end()

    pessoas.push(body)
    return res.json(body)
})
//DELETE -> deletar
routes.delete('/:id', (req, res) => {
    const id = req.params.id

    let newDB = pessoas.filter(item => { 
        if (!item[id])
            return item
    })

    pessoas = newDB

    return res.send(newDB)
})

// Projetos
routes.get('/projetos', (req, res) => {
    return res.json(projetos)
})
//POST -> inserir
routes.post('/addProjetos', (req, res) => {
    const body = req.body

    if (!body)
        return res.status(400).end()

    projetos.push(body)
    return res.json(body)
})
//DELETE -> deletar
routes.delete('projetos/:id', (req, res) => {
    const id = req.params.id

    let newDB = projetos.filter(item => { 
        if (!item[id])
            return item
    })

    projetos = newDB

    return res.send(newDB)
})

// Equipe
routes.get('/equipes', (req, res) => {
    return res.json(equipes)
})
//POST -> inserir
routes.post('equipes/add', (req, res) => {
    const body = req.body

    if (!body)
        return res.status(400).end()

    equipes.push(body)
    return res.json(body)
})
//DELETE -> deletar
routes.delete('equipes/:id', (req, res) => {
    const id = req.params.id

    let newDB = equipes.filter(item => { 
        if (!item[id])
            return item
    })

    equipes = newDB

    return res.send(newDB)
})

module.exports = routes
