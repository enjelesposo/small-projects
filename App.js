import { useState } from 'react';

function App() {

  var quotes = {
    1: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque augue lorem, cursus aliquet tortor ac, facilisis viverra lectus.', 'Lorem Ipsum' ],
    2: ['Make the most of yourself, for that is all there is of you.', 'Ralph Waldo Emerson'],
    3: ['You can\'t go back and change the beginning, but you can start where you are and change the ending.', 'C.S. Lewis'],
    4: ['Great things are done by a series of small things brought together.', 'Vincent van Gogh'],
    5: ['Not all those who wander are lost.', 'J. R. R. Tolkien'],
    6: ['Everything you\'ve ever wanted is sitting on the other side of fear.', 'George Addair']
  }

  // Generates a random number
  const randomNumber = () =>{
    return Math.floor(Math.random() * Object.keys(quotes).length) + 1;
  }

  // useState hook makes num reactive
  const [num, setNum] = useState('1');

  // click event
  const handleClick = () =>{
    setNum(randomNumber());
  }

  return (
    <div className="App">

      <div className="container">
        
        <h1>Quote Generator</h1>  

        <div className="quote-container">
          <h3>{ quotes[num][0] }</h3>
          <p>{ quotes[num][1] }</p>
        </div>

        <button onClick={handleClick}>get quote</button>
        
      </div>

    </div>
  );
}

export default App;
