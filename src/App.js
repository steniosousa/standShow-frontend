import './App.css';
import Body from './components/body';
import Card from './components/Card';
import Header from './components/Header';
import { Company } from './components/Company';
import { Customers } from './components/Customers';
import { Ftp } from './components/Ftp';
import {  New } from './components/new';

function App() {
  return (
    <div className="App">
        {/* <Ftp/> */}
        <Header/>
         <Body/>
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
              <Card urlImage={"https://i.pinimg.com/736x/fa/70/e5/fa70e5a1fb2c90a923c44d9ec7ceaac3--stand-design-booth-design.jpg"} city={'Brasília - DF'} text={'Nova DFL - Ciosp 2016 | Stands feiras, Projeto stand de exposição, Estande de exposição'} title={'Stand de Exposição'} user={'Marcos Júnio'} yeah={2022} />
            </div>
            <div className="card">
                <Card urlImage={"https://www.artemidiacomunicacao.com.br/media/sig_j8PwBnwnzL/produtos/stand-para-eventos/stand-para-eventos-01.jpeg"} city={'Natal - RN'} user={'Luciana Mendes'} yeah={2020}  text={'Organize seu evento conosco'} title={'Stand para Evento'}/>
            </div>
            <div className="card">
              <Card urlImage={"https://www.artemidiacomunicacao.com.br/media/sig_j8PwBnwnzL/produtos/stand-para-eventos/stand-para-eventos-01.jpeg"} city={'Natal - RN'} user={'Luciana Mendes'} yeah={2020}  text={'Organize seu evento conosco'} title={'Stand para Evento'}/>
            </div>
        </div>
        <Company position={"left"}/>
       <Company position={"right"}/>
         {/* <New/> */}
        <Customers/>
    </div>
  );
}

export default App;


