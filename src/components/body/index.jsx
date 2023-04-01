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
    <div className="body">
        <h1 id="logo">Stand<span>Show</span></h1>
        <h3>O melhor da <span>Arquitetura</span>  e <span>Design</span>, junto com você</h3>
        <div className='buttons'>
            <button>Instagram</button>
            <button>Whatsapp</button>
            <button>Facebook</button>
        </div>
    </div>
)
}