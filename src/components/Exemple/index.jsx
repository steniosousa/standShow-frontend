import { useEffect, useState } from 'react';
import './style.css';

export function Example(){
  return(
    <div className='gridArea' id='modelos'>
      <h3>Modelos</h3>
      <section className="gride end">
        <div className="item item-1">
          <img  src="https://images.adsttc.com/media/images/5ad5/edc8/f197/cc5c/9600/0e8b/medium_jpg/DURATEX_(12).jpg?1523969464" alt="" />
        </div>
        <div className="item item-2">
          <img src="https://www.gleventslive.com.br/pt/wp-content/uploads/2017/11/ESTANDES-8.jpg" alt="" />
        </div>
        <div className="item item-3">
          <img src="https://www.celeirofeiras.com.br/imagens/servicos/servicos-07.jpg" alt="" />
        </div>
        <div className="item item-4">
          <img  src="https://www.ddmontagens.com.br/imagens/informacoes/montagem-estandes-01.jpg" alt="" />
        </div>
        <div className="item item-5">
          <img  src="https://grupodeeventos.com.br/wp-content/uploads/2018/06/como-escolher_01.jpg" alt="" />
        </div>
        <div className="item item-6">
          <img  src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/92d23328063491.5636f1508f259.jpg" alt="" />
        </div>
      </section>
    </div>
  )
}