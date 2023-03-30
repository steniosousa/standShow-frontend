import './App.css';
import Body from './components/body';
import Card from './components/Card';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
        <Header/>
        <Body/>
        <div className='cardsForm'>
          <Card/>
          <Card/>
          <Card/>
        </div>
    </div>
  );
}

export default App;
