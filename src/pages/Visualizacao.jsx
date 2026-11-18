// Visualização: recebe "title" (constante), "filmes" (estado) e
// "removerRegistro" (função criada no App) por props.
// Formato C = 4: lista em ordem alfabética pelo título.
import { Link } from 'react-router-dom'

function Visualizacao({ title, filmes, removerRegistro }) {
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
              <strong>{f.titulo}</strong> — {f.duracao} min — {f.genero} — {f.sala}{' '}
              {/* chama a função do App passando o id deste filme */}
              <button onClick={() => removerRegistro(f.id)}>Remover</button>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default Visualizacao