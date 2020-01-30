import React, {Component} from 'react';
import './App.css';
import QuoteMachine from'./components/quotemachine';
import {Card, CardActions, CardMenu, CardText, CardTitle, IconButton} from 'react-mdl';

class App extends Component {
  render(){
  return (
   <div className="App"> 
   <Card shadow={5} style={{width: '512px', margin: 'auto'}}>
    <CardTitle style={{background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover', height: '250px'}}className="card-title"><h1>Find your daily motivation</h1></CardTitle>
    <CardText>
    <QuoteMachine /> {/*This is the parent*/}
    </CardText>
    <CardActions border>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
      <i className="fab fa-twitter"></i>
    </CardMenu>
</Card>
     

   </div>
   );
  }
}

export default App;
