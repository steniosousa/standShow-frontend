import { useEffect } from 'react';
import './styles.css';
export default function Body(){
    function startPage(){
        document.getElementById('logo').classList.add('moviment')
    }
    useEffect(() =>{
        startPage()
    },[])
return(
    <div className="menuBody">
        <h1 id="logo">Stand<span>Show</span></h1>
        <h3>O melhor da <span>Arquitetura</span>  e <span>Design</span>, junto com você</h3>
        <div className='buttons'>
            <button onClick={() => window.location.assign("https://www.instagram.com/grupostandshow/")}>Instagram</button>
            <button>Whatsapp</button>
            <button onClick={() => window.location.assign("https://www.facebook.com/grupostandshow/")}>Facebook</button>
        </div>
    </div>
)
}