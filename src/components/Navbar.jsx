// Navbar horizontal no topo com links centralizados (D = 0).
// NavLink recebe uma função em className: o link ativo ganha a classe "ativo".
import { NavLink } from 'react-router-dom'

function Navbar() {
  const classe = ({ isActive }) => (isActive ? 'link ativo' : 'link')

  return (
    <nav className="navbar">
      {/* "end" evita que a Home fique ativa em todas as rotas */}
      <NavLink to="/" end className={classe}>Home</NavLink>
      <NavLink to="/filmes/novo" className={classe}>Cadastrar</NavLink>
      <NavLink to="/filmes" end className={classe}>Filmes</NavLink>
    </nav>
  )
}

export default Navbar
