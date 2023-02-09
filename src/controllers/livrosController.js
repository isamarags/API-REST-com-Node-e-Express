import livros from "../models/Livro.js";

class LivroController {

  static listarLivros =  (req, res) => {
    livros.find((err, livros) => {
      res.status(200).json(livros)
    }) //buscar os livros encontrados
  }

// cadastrando um novo livro
  static cadastrarLivros = (req, res) => {
    let livro = new livros(req.body)

    livro.save((err) => {
      if(err) {
        res.status(500).send({message: `${err}.message - Erro ao cadastrar o livro.`})
      } else{
        res.status(201).send(livro.toJSON())
      }
    })
  }

}

export default LivroController;
