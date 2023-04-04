import './App.css';
import Body from './components/body';
import Card from './components/Card';
import Header from './components/Header';
import { Company } from './components/Company';
import { Customers } from './components/Customers';
import { Ftp } from './components/Ftp';
import {  New } from './components/new';
import { Footer } from './components/Footer';
import { Example } from './components/Exemple';

function App() {
  return (
    <div className="App">
        <Ftp/>
        <Header/>
        <Body/>
        <div >
          <Example/>
         </div>
        <div className="row">
            <div className="card">
              <Card 
              urlImage={"https://news.mst.edu/files/2022/03/20211029-TEDx-Missouri-ST-NR-19-1.jpg"} 
              city={'Fortaleza - CE'} 
              user={'Stênio Sousa'} 
              yeah={2019}  
              text={'TedX fortaleza'} 
              title={'TedX fortaleza'}/>
            </div>
            <div className="card">
                <Card urlImage={"https://www.artemidiacomunicacao.com.br/media/sig_j8PwBnwnzL/produtos/stand-para-eventos/stand-para-eventos-01.jpeg"} city={'Natal - RN'} user={'Luciana Mendes'} yeah={2020}  text={'Organize seu evento conosco'} title={'Stand para Evento'}/>
            </div>
            <div className="card">
              <Card urlImage={"https://www.artemidiacomunicacao.com.br/media/sig_j8PwBnwnzL/produtos/stand-para-eventos/stand-para-eventos-01.jpeg"} city={'Natal - RN'} user={'Luciana Mendes'} yeah={2020}  text={'Organize seu evento conosco'} title={'Stand para Evento'}/>
            </div>
            <div className="card">
              <Card urlImage={"https://www.artemidiacomunicacao.com.br/media/sig_j8PwBnwnzL/produtos/stand-para-eventos/stand-para-eventos-01.jpeg"} city={'Natal - RN'} user={'Luciana Mendes'} yeah={2020}  text={'Organize seu evento conosco'} title={'Stand para Evento'}/>
            </div>
        </div>
          <Company/>
          <Customers/>
        
    </div>
  );
}

export default App;


