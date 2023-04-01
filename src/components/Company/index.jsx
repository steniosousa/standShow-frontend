import './style.css';

export function Company({position}) {
  console.log(position);
  return(
    <div className="insideCompany">
      {position === "left" ? (
        <>  
          <div className="containerLeft">
              <img src="https://www.exhibitionstands.co.uk/wp-content/uploads/2020/10/virtual_trade_show_scene2.jpg" alt="" />
            <div className="detail">
              <h3>Comprometimento</h3>
              <p>
                Stand é a montadora oficial de um dos maiores eventos de turismo que temos no Brasil!

                Temos a responsabilidade de atender com qualidade e excelência uma feira que conta com quase 3.500m² de área construída.

                Seguimos com a realização de sonhos sendo concretizados e com a alegria de entregar com inovação e qualidade os Stands de nossos clientes!
              </p>
            </div>
          </div>

        </>
      ):position === "right" ?(
        <>
          <div className='containerLeft'>
            <div className='detail'>
              <h3>Comprometimento</h3>
              <p>
                Stand é a montadora oficial de um dos maiores eventos de turismo que temos no Brasil!

                Temos a responsabilidade de atender com qualidade e excelência uma feira que conta com quase 3.500m² de área construída.

                Seguimos com a realização de sonhos sendo concretizados e com a alegria de entregar com inovação e qualidade os Stands de nossos clientes!
              </p>
            </div>
              <img src="https://www.exhibitionstands.co.uk/wp-content/uploads/2020/10/virtual_trade_show_scene2.jpg" alt="" />
          </div>
        </>
      ):(
        <div className='containerImages'>
          <img src="https://www.exhibitionstands.co.uk/wp-content/uploads/2020/10/virtual_trade_show_scene2.jpg" alt="" />

          <div className="secondImage">
            <img src="https://www.exhibitionstands.co.uk/wp-content/uploads/2020/10/virtual_trade_show_scene2.jpg" alt="" />
          </div>

        </div>
      )}
      

    </div>
  )
}