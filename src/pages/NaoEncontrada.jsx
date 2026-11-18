// Página da rota coringa "*": mostra o caminho digitado com useLocation.
import { useLocation, Link } from 'react-router-dom'

function NaoEncontrada() {
  const { pathname } = useLocation()

  return (
    <section>
      <h1>Página não encontrada</h1>
      <p>O caminho <code>{pathname}</code> não existe.</p>
      <Link to="/">Voltar para a Home</Link>
    </section>
  )
}

export default NaoEncontrada
