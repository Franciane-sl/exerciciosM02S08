import './Produtos.css'

function Produtos() {
  return (
    <section className="produtos" id="produtos">
      <h2>Nossos Produtos</h2>
      <div className="produtos-container">
        <div className="produto-card">
          <img src="https://http2.mlstatic.com/D_653479-MLU78970492553_092024-C.jpg" alt="Placa Solar 400W" />
          <h3>Placa Solar 400W</h3>
          <p>Alta eficiência na conversão de energia solar. Ideal para residências e comércios.</p>
        </div>

        <div className="produto-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmQ8T417CRtIELP7ZXkorVNQeIBfk9UppRdg&s" alt="Kit Solar Completo" />
          <h3>Kit Solar Completo</h3>
          <p>Inclui placas, inversores e estrutura de fixação. Pronto para instalação.</p>
        </div>

        <div className="produto-card">
          <img src="https://acdn-us.mitiendanube.com/stores/003/582/147/products/1-adbe6de96ac972f8b517117390192234-1024-1024.jpg" alt="Inversor Solar" />
          <h3>Inversor Solar</h3>
          <p>Transforma a energia solar captada em energia elétrica utilizável. Alta durabilidade e eficiência.</p>
        </div>
      </div>
    </section>
  )
}

export default Produtos
