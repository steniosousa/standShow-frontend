import { useEffect, useState } from 'react';
import './style.css';

export function Example(){
  return(
    <div className='gridArea' id='modelos'>
      <h3>Modelos</h3>
      <section className="gride end">
        <div className="item item-1">
          <div className="legend1">
            <h1>Estande Ecologico</h1>
          </div>
        </div>
        <div className="item item-2">
          <div className="legend2">
            <h1>Estande Misto</h1>
          </div>
        </div>
        <div className="item item-3">
          <div className="legend3">
            <h1>Estande Personalizado</h1>
          </div>
        </div>
        <div className="item item-4">
          <div className="legend4">
            <h1>Estande para Shopping</h1>
          </div>
        </div>
        <div className="item item-5">
          <div className="legend5">
            <h1>Estande Básico</h1>
          </div>
        </div>
        <div className="item item-6">
          <div className="legend6">
            <h1>Estande Modular</h1>
          </div>
        </div>
      </section>
    </div>
  )
}