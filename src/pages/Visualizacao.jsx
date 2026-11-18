// Visualização: recebe "title" (constante) e "filmes" (estado) vindos do App.
// Formato C = 4: lista em ordem alfabética pelo título.
import { Link } from 'react-router-dom'

function Visualizacao({ title, filmes }) {
  // Ordeno uma cópia do array para não alterar o estado original
  const ordenados = [...filmes].sort((a, b) =>
    a.titulo.localeCompare(b.titulo, 'pt-BR')
  )

  return (
    <section>
      <h1>{title}</h1>

      {ordenados.length === 0 ? (
        <p>
          Nenhum filme cadastrado. <Link to="/filmes/novo">Cadastrar o primeiro</Link>
        </p>
      ) : (
        <ul className="lista">
          {ordenados.map((f) => (
            <li key={f.id}>
              <strong>{f.titulo}</strong> — {f.duracao} min — {f.genero} — {f.sala}
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default Visualizacao