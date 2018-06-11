import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';


class App extends React.Component{
    state = {
        fishes:{},
        order:{}
    };

    addFish = fish => {
     //1. Take a copy of existing state
     const fishes = {...this.state.fishes};
     //2.Add a new fish to the copies
     fishes[`fish${Date.now()}`] = fish;
     //3.Set the new fishes object to state
     this.setState({fishes: fishes })
    };

    render(){
        return(
        
            <div className="catch-of-the-day">
               <div className="menu">
               <Header/>

            </div>
           <Order /> 
  
            <Inventory addFish={this.addFish}/> 
            </div>

        );
    }

}

export default App;