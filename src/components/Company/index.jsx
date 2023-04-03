import { useEffect, useState } from 'react';
import './style.css';

export function Company({position}) {
const[activeVerifyScroll,setActiveVerifyScroll] = useState(0)
  const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
  const target = document.querySelectorAll('.containerLeft');
  const left = document.getElementById('imageLeft')
  const detail =document.getElementById('detailLeft')

  const rigth = document.getElementById('imageRight')
  const detailRigth =document.getElementById('detailRight')
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
            rigth.classList.add('right');
            detailRigth.classList.remove('detail');
            detailRigth.classList.add('detailRight')
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
          <div className="containerLeft"  id="left">
            <img id='imageLeft' className="teste" src="https://www.standshow.com.br/imagens/interna/empresa/estrutura-stand-show-9g.jpg" alt="" />

            <div className="subtitleLeft">
            <div className="detail" id='detailLeft'>
              <h3 className='detailLeftH3'>StandShow</h3>
              <p className='detailLeftP'>
                Somos especialistas em soluções inteligentes, nossos estandes são ecologicamente corretos e adaptados às necessidades do meio ambiente. Desde 1998, criamos e executamos projetos e montagens de estandes com tecnologia, criatividade e profissionalismo, aliados à pontualidade, qualidade e segurança à serviço de nossos clientes.
                <br></br>
                Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.
              </p>
            </div>
            </div>
          </div>
    </div>
  )
}