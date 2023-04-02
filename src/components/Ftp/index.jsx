import { useEffect, useState } from 'react';
import './style.css';

export function Ftp() {
  const [active,setActive] = useState(false)
  const [activeAnimation, setActiveAnimation] = useState('')
  const [activeLongerInput, setActiveLongerInput] = useState('')
  function handleEnableCard(){
    if(active === false){
      setActiveAnimation("activeAnimation")
      setActiveLongerInput("activeLongerInput")
      setActive(!active)
    }else{
      setActiveAnimation("activeAnimationReverse")
      setActiveLongerInput("")
      setActive(!active)
    }
  }

  useEffect(() =>{handleEnableCard()},[])
  return (
    <div className='ftpButton'>
      <a href='#home'>
        <button type="submit" className='btn' onClick={handleEnableCard}>
        +
      </button>
      </a>
        <div  id={activeAnimation}>
          <div className="iconUser">
            <img src="https://cdn-icons-png.flaticon.com/512/74/74577.png" alt="User" />
          </div>
          <div className="inputs" >
            <input className={activeLongerInput}type="text" name='userName' id='userName' placeholder='Usúario' />
            <input className={activeLongerInput}type="password" name="password" id="password" placeholder='Senha'/>
          </div>
          <button type="submit" id='buttonLogin' className={activeLongerInput}>Login</button>
        </div>

      </div>
  )
}