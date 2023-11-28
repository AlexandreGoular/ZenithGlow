// Inserir Dados
localStorage.setItem("name", "Alexandre")

// Restart sem perder dados

// Resgatar item

const name = localStorage.getItem("name")

// Resgate item que não existe
const lastName = localStorage.getItem("lastName")

// Remover item
localStorage.removeItem("name")

//Limpar todos os Itens
localStorage.setItem("a", 1)
localStorage.setItem("b", 2)

localStorage.clear()