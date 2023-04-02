import { useEffect, useState } from 'react';
import './style.css';

export function Company({position}) {
const[activeVerifyScroll,setActiveVerifyScroll] = useState(0)
  const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
  const target = document.querySelectorAll('.containerLeft');
  const left = document.getElementById('imageLeft')
  const detail =document.getElementById('detailLeft')

  const rigth = document.getElementById('imageRigth')
  const detailRigth =document.getElementById('detailRigth')
    function handleScroll() { 
      target.forEach(function(element) {
        if((windowTop) >= element.offsetTop) {
          if(element.id == 'left'){
            left.classList.remove('teste');
            left.classList.add('left');
            detail.classList.remove('detail');
            detail.classList.add('detailLeft')
          }
          if(element.id == 'right'){
            rigth.classList.remove('teste');
            rigth.classList.add('rigth');
            detailRigth.classList.remove('detail');
            detailRigth.classList.add('detailRigth')
          }
          
        } 
      }) 
    }
    useEffect(() =>{
      handleScroll()
    },[activeVerifyScroll])
    window.onscroll = () => setActiveVerifyScroll(activeVerifyScroll+1)



  
  return(

    <div className="insideCompany" id="service" >
      {position === "left" ? (
        <>  
          <div className="containerLeft"  id="left">
            <img id='imageLeft' className="teste" src="https://www.exhibitionstands.co.uk/wp-content/uploads/2020/10/virtual_trade_show_scene2.jpg" alt="" />
            <div className="detail" id='detailLeft'>
              <h3 className='detailLeftH3'>Comprometimento</h3>
              <p className='detailLeftP'>
                Stand é a montadora oficial de um dos maiores eventos de turismo que temos no Brasil!

                Temos a responsabilidade de atender com qualidade e excelência uma feira que conta com quase 3.500m² de área construída.

                Seguimos com a realização de sonhos sendo concretizados e com a alegria de entregar com inovação e qualidade os Stands de nossos clientes!
              </p>
            </div>
          </div>
        </>
      ):position === "right" ?(
        <>
          <div className='containerLeft' id="right">
            <div className='detail' id='detailRigth'>
              <h3 className='detailHigthtH3'>Comprometimento</h3>
              <p className='detailRigthtP'>
                Stand é a montadora oficial de um dos maiores eventos de turismo que temos no Brasil!

                Temos a responsabilidade de atender com qualidade e excelência uma feira que conta com quase 3.500m² de área construída.

                Seguimos com a realização de sonhos sendo concretizados e com a alegria de entregar com inovação e qualidade os Stands de nossos clientes!
              </p>
            </div>
              <img id='imageRigth' className="teste" src="https://www.exhibitionstands.co.uk/wp-content/uploads/2020/10/virtual_trade_show_scene2.jpg" alt="" />
          </div>
        </>
      ):(
        <></>
      )}
      

    </div>
  )
}