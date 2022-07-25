import { useState } from 'react';
import './css/App.css';
import quotes from './assets/quotes.json';
import Author from './components/Author';
import Box from './components/QuoteBox';
import Button from './components/Button';

function random(array)
{
    return array[Math.floor(Math.random() * array.length)];
}

function App() {

  const [obj, setObj] = useState(random(quotes));

  function randomQuotes()
  {
    setObj(random(quotes));
  }
  let colors = Math.floor(Math.random()*16777215).toString(16);
  document.body.style = `background: #${colors};`;
  return (
    <div className="App">
      <div className="card">
        <Box box={obj.quote} color={colors}/>
        <Author author={obj.author} color={colors}/>
        <Button button={randomQuotes} color={colors}/>
      </div>
    </div>
  );
}

export default App;
