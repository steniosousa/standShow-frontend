import './style.css';

export function Footer() {
  return (
    <div className="containerFooter">
      <div className="diferent">
        <div className="footerImg">
          <a 
          href="https://www.google.com.br/maps/place/R.+Ana+L%C3%BAcia+Dias,+101+-+Lagoa+Redonda,+Fortaleza+-+CE,+60831-500/@-3.8326685,-38.4636776,17.17z/    data=!4m6!3m5!1s0x7c7453597e7ec5b:0x7bc119e50a99894f!8m2!3d-3.8327048!4d-38.4626235!16s%2Fg%2F11dz5lwdd9">
            
          <img src="https://standshow.com.br/imagens/interna/contato-mapa.jpg" alt="Maps" />
          </a>
        </div>

        <div className="footerLocation">
          <h4>Contato</h4>
          <p><span>(FORTALEZA-CE </span>Rua Ana Lúcia Dias,101 Lagoa Redonda)</p>
          <p>(CEP 60831-500 Fortaleza CE Brasil)</p>

          <p><span>FILIAL NATAL </span>(84) 99604.1697 (Joara Lívia)</p>

          <p><span>FILIAL BELÉM </span>(91) 98111.3809 (Gisele Bernardes)</p>
        </div>
      </div>
    </div>
  )
}