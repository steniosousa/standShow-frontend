import './App.css';
import Body from './components/body';
import Card from './components/Card';
import Header from './components/Header';
import { Company } from './components/Company';
import { Customers } from './components/Customers';
import { Ftp } from './components/Ftp';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="App">
        <Header/>
        <Body/>
        
        <div className='cardsForm'>
          <Card urlImage={"http://www.abramedece.com.br/wp-content/uploads/2019/04/TEDxFortaleza04.jpg?gid=3"}/>
          <Card urlImage={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjIQ_OASM-dJMwV6h6OuOh-5N3trTZGchfZjRMsBP9edoezcgRVHGJbEj7SIgd0_gwm6o&usqp=CAU"}/>
          <Card urlImage={"https://agenciapara.com.br/midias/2018/grandes/f2ef3a43-45bb-40e6-873c-7421b4152080.jpg"}/>
        </div> 
        <Company position={"left"}/>
        <Company position={"right"}/>
        <Company position={"left"}/>
        <Company position={"image"}/>
        <Company position={"image"}/>
        <Customers/>
        <Ftp/>
        <Contact/>
    </div>
  );
}

export default App;


