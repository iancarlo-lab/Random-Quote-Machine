import React, { Component } from 'react';
import Quotes from '../data/quotes.json';

class QuoteMachine extends Component {
       constructor(props){
              super(props);
              this.state = {
                     quote: '',
                     author: '',
                     href: ''
              };
        this.getRandomQuote = this.getRandomQuote.bind(this);
      }



 getRandomQuote (){
        let data = Quotes;
        const index = Math.floor(Math.random()*102);
        let randomQuote = data[index];
        console.log(randomQuote);
       
        this.setState({
               quote: randomQuote['quote'],
               author: randomQuote['author'],
               href : 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + randomQuote.quote + '"  ' + randomQuote.author)
        })
 };

       render() { 
        return ( 
          <div id="quote-box">
              <p id="text">{this.state.quote}</p>
              <p id="author">{this.state.author}</p>
                <button id="new-quote" 
            onClick={this.getRandomQuote}>
                Generate Random Quote
            </button>
            <hr />
            <a id="tweet-quote" target="_blank" rel="noopener noreferrer" href={this.state.href}>Tweet</a>
               </div>
              );
       }
}
 
export default QuoteMachine;