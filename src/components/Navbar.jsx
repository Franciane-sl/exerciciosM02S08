import './Navbar.css'

function Navbar() {
    return (
        <nav className="navBar">
            <ul>
                <li><a href="#sobre">Sobre Nós</a></li>
                <li><a href="#porqueInvestir">Porque Investir?</a></li>
                <li><a href="#produtos">Produtos</a></li>
                <li><a href="orcamento">Orçamento</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;