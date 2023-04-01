import './styles.css';
export default function Header(){
    return(
    <div className="header" id="home">
        <nav className='navegation'>
            <a href="#home">Home</a>
            <a href="#events">Eventos</a>
            <a href="#service">Serviços</a>
            <a href="#clients">Clientes</a>
            <a href="#new">Novidades</a>
            <a href="#depoiment">Depoimentos</a>
            {/* <a href="#">Arquivos FTP</a> */}
            <a href="#contact">Contato</a>
        </nav>
    </div>
    )
}