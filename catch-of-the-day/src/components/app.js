import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';

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

    loadSampleFishes = () => {
     this.setState({ fishes: sampleFishes});
    }

    addToOrder = (key) => {
        //1. take a copy of state
        const order = {...this.state.order};
        //2Either add or update order
        order[key] = order[key] + 1||1;
        //3.call set state to update our state object
        this.setState({order});
    }

    render(){
        return(
        
            <div className="catch-of-the-day">
               <div className="menu">
               <Header tagline="Fresh Seafood Market"/>
                <ul className="fishes">
                {Object.keys(this.state.fishes).map(key => 
                <Fish key={key} details={this.state.fishes[key]} 
                index={key} 
                addToOrder={this.addToOrder}/>)}

                </ul>
            </div>
           <Order /> 
  
            <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes}/> 
            </div>

        );
    }

}

export default App;