import express from "express";
import livros from "./livrosRoutes.js"

// a rota principal fica nesse arquivo
const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send({titulo: "Funcionando!"})
  })

  app.use(
    express.json(),
    livros
  )
}

export default routes;