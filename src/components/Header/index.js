import './styles.css';
export default function Header(){
    return(
    <div className="header" id="home">
         <section class="top-nav">
            <div>
            Stand<span>Show</span>
            </div>
            <input id="menu-toggle" type="checkbox" />
            <label class='menu-button-container' for="menu-toggle">
                <div class='menu-button'></div>
            </label>
            <ul className='menu'>
                <li>
                    <a href="#home">Home</a>
                </li>
                <li>
                    <a href="#events">Eventos</a>
                </li>
                <li>
                    <a href="#service">Serviços</a>
                </li>
                <li>
                    <a href="#clients">Clientes</a>
                </li>
                <li>
                    <a href="#new">Novidades</a>
                </li>
                <li>
                    <a href="#depoiment">Depoimentos</a>
                </li>
                <li>
                    <a href="#contact">Contato</a>
                </li>
            {/* <a href="#">Arquivos FTP</a> */}
            </ul>
        </section>
    </div>
    )
}