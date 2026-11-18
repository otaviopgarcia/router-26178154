// Cadastro: recebe "adicionarRegistro" por props, função criada no App.
// Regra B = 1: a duração (campo numérico) tem que ser maior que zero.
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const GENEROS = ['Ação', 'Comédia', 'Drama']

function Cadastro({ adicionarRegistro }) {
  const navigate = useNavigate()

  // Formulário controlado: cada campo é guardado em um único estado
  const [form, setForm] = useState({ titulo: '', duracao: '', genero: GENEROS[0], sala: '' })
  const [erros, setErros] = useState({})

  // Atualiza só o campo que mudou, usando o "name" do input
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  // Confere os campos vazios e a regra B (duração > 0)
  function validar() {
    const novos = {}
    if (!form.titulo.trim()) novos.titulo = 'Informe o título.'
    if (form.duracao === '') {
      novos.duracao = 'Informe a duração.'
    } else if (Number(form.duracao) <= 0) {
      novos.duracao = 'A duração deve ser maior que zero.'
    }
    if (!form.sala.trim()) novos.sala = 'Informe a sala.'
    return novos
  }

  function handleSubmit(e) {
    e.preventDefault() // impede o navegador de recarregar a página
    const novos = validar()
    setErros(novos)
    if (Object.keys(novos).length > 0) return // tem erro: não salva

    // id único com Date.now(); o registro vai para o estado do App
    adicionarRegistro({
      id: Date.now(),
      titulo: form.titulo.trim(),
      duracao: Number(form.duracao),
      genero: form.genero,
      sala: form.sala.trim(),
    })
    navigate('/filmes') // vai para a visualização depois de salvar
  }

  return (
    <section>
      <h1>Cadastrar filme</h1>
      <form onSubmit={handleSubmit} noValidate>
        <label>Título
          <input name="titulo" value={form.titulo} onChange={handleChange} />
          {erros.titulo && <span className="erro">{erros.titulo}</span>}
        </label>

        <label>Duração (min)
          <input name="duracao" type="number" value={form.duracao} onChange={handleChange} />
          {erros.duracao && <span className="erro">{erros.duracao}</span>}
        </label>

        <label>Gênero
          <select name="genero" value={form.genero} onChange={handleChange}>
            {GENEROS.map((g) => <option key={g} value={g}>{g}</option>)}
          </select>
        </label>

        <label>Sala
          <input name="sala" value={form.sala} onChange={handleChange} />
          {erros.sala && <span className="erro">{erros.sala}</span>}
        </label>

        <button type="submit">Salvar</button>
      </form>
    </section>
  )
}

export default Cadastro
