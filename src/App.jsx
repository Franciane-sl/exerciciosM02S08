import './App.css'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Orcamento from './components/Orcamento/Orcamento'
import PorQueInvestir from './components/PorQueInvestir/PorQueInvestir'
import Produtos from './components/Produtos/Produtos'
import SobreNos from './components/SobreNos/sobreNos'



function App() {
  

  return (
    <>
    <header className='headerApp'>
      <h1>Energia Solar 365</h1>
      <p>Economize com o sol. Invista no seu futuro!</p>
    </header>
    <main>
      <article>
        <Navbar/>
        <SobreNos/>
        <PorQueInvestir/>
        <Produtos/>
        <Orcamento/>
      </article>
    </main>
    <Footer/>
    </>
  )
}

export default App
