import logo from './logo.svg';
import './App.css';
const tasks = ['Estudar','Ler','caminhar', 'Ver a Champions']

// const task = () => {
// return (

// }
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>{tasks.map(element=><li>{element}</li>)}</ul>);
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
  };

export default App;
