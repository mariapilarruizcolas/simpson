
import './App.css';
import QuoteCard from './components/QuoteCard';
import axios from 'axios';
import React from 'react';


function App() {
  const [newQuote, setNewQuote] = React.useState(
    {"quote":"I don't want to sound like a killjoy, but becuase this is not to my taste I don't think anyone else should be allowed to enjoy it.",
     "character":"Marge Simpson",
     "image":"https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMargeSimpson.png?1497567512205",
    "characterDirection":"Right"});
  
   const getNewQuote = () => {
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes')
  
      .then((response) => response.data)
  
      .then((data) => {
        console.log(data);
  
        setNewQuote(data[0]);
  
      });
    }

  return (
    <div className="App">
      <button onClick={getNewQuote}>
        Simpson family quote
      </button>

            <QuoteCard
            key={newQuote.index}
            image={newQuote.image}
            character={newQuote.character}
            quote={newQuote.quote}
          />
        
    </div>
  );
}

export default App;