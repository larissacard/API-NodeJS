const express = require('express')
const routes = express.Router()

let pessoas = [
    {Id:'1', Nome: 'Larissa', Profissao: 'frontEnd', Tarefas: 'tar' },
    {Id:'2', Nome: 'Dayanne', Profissao: 'BackEnd', Tarefas: 'tar' },
    {Id:'3', Nome: 'Iara', Profissao: 'BD', Tarefas: 'tar' }
]

let projetos = [
    {Id:'1', Nome: 'Pousada', Equipe: '1', Tarefas: '1' },
    {Id:'2', Nome: 'API', Equipe: '2', Tarefas: '1'},
    {Id:'3', Nome: 'GP-Inovação', Equipe: '3', Tarefas: '1'}
]

let equipes = [
    {Id:'1', Nome: 'equipe 1', Membros: 'Array', Projetos: '1'},
    {Id:'2', Nome: 'equipe 2', Membros: 'Array', Projetos: '3'},
    {Id:'3', Nome: 'equipe 3', Membros: 'Array', Projetos: '2'}
]

let tarefas = [
    {Id:'1', Nome: 'Task 1', Descrição: 'Descrição task 1', Projeto: '1'},
    {Id:'2', Nome: 'Task 2', Descrição: 'Descrição task 1', Projeto: '2'},
    {Id:'3', Nome: 'Task 3', Descrição: 'Descrição task 1', Projeto: '3'}
]





/* ------------------------------ Pessoas ------------------------------ */

// Mostrando todas as pessoas
routes.get('/pessoas', (req, res) => {
    return res.json(pessoas)
})

// Mostrando pessoas com um ID específico
routes.get('/pessoas/:id', (req, res) => {
    const id = req.params.id
    for (let index = 0; index < pessoas.length; index++) {
        if (id == pessoas[index].Id) {
            return res.json(pessoas[id-1])
        }     
    }
})

// Inserindo pessoas
routes.post('/pessoas', (req, res) => {
    const body = req.body

    if (!body)
        return res.status(400).end()

    pessoas.push(body)
    return res.json(body)
})

// Deletando pessoas
routes.delete('/pessoas/:id', (req, res) => {
    const id = req.params.id

    let newDB = pessoas.filter(item => { 
        if (!item[id])
            return item
    })

    pessoas = newDB
    return res.send(newDB)
})

// Editando pessoas
routes.put('/pessoas/:id', (req,res) =>{
    const id = req.params.id
    pessoas[id-1] = req.body
    
    return res.json(pessoas)
})





/* ------------------------------ Projetos ------------------------------ */

// Mostrando todos os Projetos
routes.get('/projetos', (req, res) => {
    return res.json(projetos)
})

// Mostrando projetos pelo ID
routes.get('/projetos/:id', (req, res) => {
    const id = req.params.id
    for (let index = 0; index < projetos.length; index++) {
        if (id == projetos[index].Id) {
            return res.json(projetos[id-1])
        }     
    }
})

// Adicionando Projeto
routes.post('/projetos', (req, res) => {
    const body = req.body

    if (!body)
        return res.status(400).end()

    projetos.push(body)
    return res.json(body)
})

// Deletando Projeto
routes.delete('/projetos/:id', (req, res) => {
    const id = req.params.id

    let newDB = projetos.filter(item => { 
        if (!item[id])
            return item
    })

    projetos = newDB
    return res.send(newDB)
})

// Editando projeto
routes.put('/projetos/:id', (req,res) =>{
    const id = req.params.id
    projetos[id-1] = req.body
    
    return res.json(projetos)
})





/* ------------------------------ Equipes ------------------------------ */

// Mostrando todas as equipes
routes.get('/equipes', (req, res) => {
    return res.json(equipes)
})

// Mostrando equipes específicas pelo ID
routes.get('/equipes/:id', (req, res) => {
    const id = req.params.id
    for (let index = 0; index < equipes.length; index++) {
        if (id == equipes[index].Id) {
            return res.json(equipes[id-1])
        }     
    }
})

// Inserindo equipe 
routes.post('/equipes', (req, res) => {
    const body = req.body

    if (!body)
        return res.status(400).end()

    equipes.push(body)
    return res.json(body)
})

// Deletando equipe pelo ID
routes.delete('/equipes/:id', (req, res) => {
    const id = req.params.id

    let newDB = equipes.filter(item => { 
        if (!item[id])
            return item
    })

    equipes = newDB
    return res.send(newDB)
})

// Editando Equipe
routes.put('/equipes/:id', (req,res) =>{
    const id = req.params.id
    equipes[id-1] = req.body
    
    return res.json(equipes)
})


/* ------------------------------ Tarefas ------------------------------ */

// Mostrando todas as tarefas
routes.get('/tarefas', (req, res) => {
    return res.json(tarefas)
})

// Mostrando tarefas com um ID específico
routes.get('/tarefas/:id', (req, res) => {
    const id = req.params.id
    for (let index = 0; index < tarefas.length; index++) {
        if (id == tarefas[index].Id) {
            return res.json(tarefas[id-1])
        }     
    }
})

// Inserindo tarefas
routes.post('/tarefas', (req, res) => {
    const body = req.body

    if (!body)
        return res.status(400).end()

    tarefas.push(body)
    return res.json(body)
})

// Deletando tarefas
routes.delete('/tarefas/:id', (req, res) => {
    const id = req.params.id

    let newDB = tarefas.filter(item => { 
        if (!item[id])
            return item
    })

    pessoas = newDB
    return res.send(newDB)
})

// Editando tarefas
routes.put('/tarefas/:id', (req,res) =>{
    const id = req.params.id
    tarefas[id-1] = req.body
    
    return res.json(tarefas)
})


module.exports = routes






/* -=-=-=-=-=-=-=-=- Mostrando a equipe de um projeto -=-=-=-=-=-=-=-= */
routes.get('/projetos/equipes/:id', (req, res) => {
    const id = req.params.id
    return res.json(proj)
})
