import logo from './logo.svg';
import './App.css';
import LookupForm from './LookupForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LookupForm />
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
}

export default App;
