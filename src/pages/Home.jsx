// Home: recebe "quantidade" por props, calculada no App (filmes.length).
function Home({ quantidade }) {
  return (
    <section>
      <h1>Cinema — Otávio</h1>
      <p>Aluno: Otávio Pinheiro Garcia — RA 26178154</p>
      <p className="destaque">Filmes cadastrados: {quantidade}</p>
    </section>
  )
}

export default Home
