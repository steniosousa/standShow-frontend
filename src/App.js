import './App.css';
import Body from './components/body';
import Card from './components/Card';
import Header from './components/Header';
import { Company } from './components/Company';
import { Customers } from './components/Customers';
import { Ftp } from './components/Ftp';

function App() {
  function  rigth(){
    document.getElementById("row").scrollLeft += 380;
  }
  function  left(){
    document.getElementById("row").scrollLeft -= 380;
  }

  return (
    <div className="App">
        <Ftp/>
        <Header/>
        <Body/>
        <div>
          <div className="row" id="row">
                <div className="card">
                  <Card 
                  urlImage={'https://thumbs2.imgbox.com/d0/ca/5gnuaXTT_t.jpeg'} 
                  city={'R$: XXX'} 
                    user={'StandShow'} 
                    yeah={''}  
                    text={'Organize seu evento conosco'} 
                  title={'Estande construído'}/>
                </div>
               <div className="card">
                    <Card urlImage={"https://thumbs2.imgbox.com/b1/82/a30bWw4o_t.jpeg"} 
                    city={'R$: XXX'} 
                    user={'StandShow'} 
                    yeah={''}  
                    text={'Organize seu evento conosco'} 
                    title={'Estando modular'}/>
                </div>
                <div className="card">
                  <Card 
                    urlImage={"https://thumbs2.imgbox.com/f6/f0/TZiEphAv_t.jpeg"} 
                    city={'R$: XXX'} 
                    user={'StandShow'} 
                    yeah={''}  
                    text={'Organize seu evento conosco'} 
                    title={'Estande Simples'}/>
                </div>
                <div className="card">
                  <Card 
                  urlImage={"https://www.artemidiacomunicacao.com.br/media/sig_j8PwBnwnzL/produtos/stand-para-eventos/stand-para-eventos-01.jpeg"}
                  city={'R$: XXX'} 
                    user={'StandShow'} 
                    yeah={''}  
                    text={'Organize seu evento conosco'} 
                  title={'Stand para Evento'}/>
                </div>
                <div className="card">
                  <Card 
                  urlImage={"https://www.artemidiacomunicacao.com.br/media/sig_j8PwBnwnzL/produtos/stand-para-eventos/stand-para-eventos-01.jpeg"}
                  city={'R$: XXX'} 
                  user={'StandShow'} 
                  yeah={''}  
                  text={'Organize seu evento conosco'} 
                  title={'Stand para Evento'}/>
                </div>
                <div className="card">
                  <Card 
                  urlImage={"https://www.artemidiacomunicacao.com.br/media/sig_j8PwBnwnzL/produtos/stand-para-eventos/stand-para-eventos-01.jpeg"}
                  city={'Natal - RN'} 
                  user={'StandShow'} 
                  yeah={2020}  
                  text={'Organize seu evento conosco'} 
                  title={'Stand para Evento'}/>
                </div>
            </div>
          <div className='buttonsScroll'>
            <button onClick={left}>&#10094;</button>
            <button  onClick={rigth}>&#10095;</button>
          </div>
        </div>
          <Company/>
          <Customers/>
        
    </div>
  );
}

export default App;


