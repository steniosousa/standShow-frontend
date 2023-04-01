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
        <Header/>
        <Body/>
        <Ftp/>
        
        <div className='cardsForm'>
          <Card urlImage={"http://www.abramedece.com.br/wp-content/uploads/2019/04/TEDxFortaleza04.jpg?gid=3"} city={'Fortaleza - CE'} text={'Importancia do TED'} title={'TedX fortaleza'} yeah={2019} user={'Stênio Sousa'}/>
          <Card urlImage={"https://i.pinimg.com/736x/fa/70/e5/fa70e5a1fb2c90a923c44d9ec7ceaac3--stand-design-booth-design.jpg"} city={'Brasília - DF'} text={'Nova DFL - Ciosp 2016 | Stands feiras, Projeto stand de exposição, Estande de exposição'} title={'Stand de Exposição'} user={'Marcos Júnio'} yeah={2022} />
          <Card urlImage={"https://www.artemidiacomunicacao.com.br/media/sig_j8PwBnwnzL/produtos/stand-para-eventos/stand-para-eventos-01.jpeg"} city={'Natal - RN'} user={'Luciana Mendes'} yeah={2020}  text={'Organize seu evento conosco'} title={'Stand para Evento'}/>
        </div> 
        <Company position={"left"}/>
        <Company position={"right"}/>
        <New/>
        <Customers/>
    </div>
  );
}

export default App;


