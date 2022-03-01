import { Component, StrictMode } from 'react';
import './App.css';

const Header = () => {
  return <h2>Hello world</h2>
}

const FieldOld = () => {
  const holder = 'enter here'
  const styleField = {
    width: '300px'
  };
  return <input
    placeholder={holder}
    type="text"
    style={styleField} />
}

class Field extends Component {
  render() {
    const holder = 'enter here'
    const styleField = {
      width: '300px'
    };
    return <input
      placeholder={holder}
      type="text"
      style={styleField} />
  }

}

function Btn() {
  const text = 'log in';
  const logged = true;

  const p = <p>{ }</p>

  return <button>{logged ? 'Enter' : text}</button>
}

function App() {
  return (
    <div className="App">
      <StrictMode>
        <Header />
      </StrictMode>
      <Field />
      <Btn />
    </div>
  );
}

export { Header }
export default App;
