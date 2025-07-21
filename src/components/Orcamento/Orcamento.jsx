import './Orcamento.css'
import { useState } from 'react'

function Orcamento() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    tipoSistema: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Dados enviados:', formData)
    alert('Orçamento enviado com sucesso!')
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      tipoSistema: ''
    })
  }

  return (
    <section className="orcamento" id="orcamento">
      <h2>Solicite um Orçamento</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Telefone:
          <input
            type="tel"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Tipo de Sistema:
          <select
            name="tipoSistema"
            value={formData.tipoSistema}
            onChange={handleChange}
            required
          >
            <option value="">Selecione...</option>
            <option value="Residencial">Residencial</option>
            <option value="Comercial">Comercial</option>
            <option value="Industrial">Industrial</option>
          </select>
        </label>

        <button type="submit">Enviar</button>
      </form>
    </section>
  )
}

export default Orcamento
