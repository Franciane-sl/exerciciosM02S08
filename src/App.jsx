import './App.css'
import Navbar from './components/navbar/Navbar'
import PorQueInvestir from './components/PorQueInvestir/PorQueInvestir'
import SobreNos from './components/SobreNos/sobreNos'



function App() {
  

  return (
    <>
    <header className='headerApp'>
      <h1>Energia Solar 365</h1>
      <p>Economize com o sol. Invista no seu futuro!</p>
    </header>
     <Navbar/>
     <SobreNos/>
     <PorQueInvestir/>
     
    
    </>
  )
}

export default App
