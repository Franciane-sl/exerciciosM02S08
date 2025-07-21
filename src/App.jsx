import './App.css'
import Navbar from './components/Navbar/Navbar'
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
      </article>
    </main>
    </>
  )
}

export default App
