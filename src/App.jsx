// App: guarda o estado central (array de filmes) e declara as rotas.
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Rodape from './components/Rodape.jsx'
import Home from './pages/Home.jsx'
import Cadastro from './pages/Cadastro.jsx'
import Visualizacao from './pages/Visualizacao.jsx'
import NaoEncontrada from './pages/NaoEncontrada.jsx'

// Constante enviada por props para a Visualização (R4)
const TITULO_LISTA = 'Filmes cadastrados'

function App() {
  // Estado centralizado com 3 registros iniciais (R3).
  // O primeiro leva o meu RA no campo complementar (Sala).
  const [filmes, setFilmes] = useState([
    { id: 1, titulo: 'Interestelar', duracao: 169, genero: 'Drama', sala: 'RA 26178154' },
    { id: 2, titulo: 'Os Vingadores', duracao: 143, genero: 'Ação', sala: 'Sala 2' },
    { id: 3, titulo: 'Se Beber, Não Case', duracao: 100, genero: 'Comédia', sala: 'Sala 3' },
  ])

  // Função criada aqui e passada ao Cadastro (R4):
  // cria um novo array com spread, sem mexer no antigo (imutabilidade).
  function adicionarRegistro(novoFilme) {
    setFilmes([...filmes, novoFilme])
  }

  return (
    <div className="app">
      <Navbar />
      <main className="conteudo">
        <Routes>
          {/* quantidade calculada aqui e enviada para a Home */}
          <Route path="/" element={<Home quantidade={filmes.length} />} />
          <Route path="/filmes/novo" element={<Cadastro adicionarRegistro={adicionarRegistro} />} />
          <Route path="/filmes" element={<Visualizacao title={TITULO_LISTA} filmes={filmes} />} />
          {/* rota coringa: qualquer caminho que não existe */}
          <Route path="*" element={<NaoEncontrada />} />
        </Routes>
      </main>
      <Rodape />
    </div>
  )
}

export default App
