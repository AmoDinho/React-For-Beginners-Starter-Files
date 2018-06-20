import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';
import base from '../base';
import PropTypes from 'prop-types';


class App extends React.Component{
    state = {
        fishes:{},
        order:{}
    };


    static propTypes ={
       match: PropTypes.Object  
    };

    componentDidMount(){

        const {params} = this.props.match;
        //FIRST REINSTATE OUR LOCAL STORAGE
        const localStorageRef = localStorage.getItem(params.storeId);
        if(localStorageRef){
            this.setState({order: JSON.parse(localStorageRef)});
        }


        this.ref = base.syncState(`${params.storeId}/fishes`, {
            context:this,
            state: 'fishes'
        });
    }

    componentWillUnmount(){
        base.removeBinding(this.ref);
    }

    componentDidUpdate(){
       

        localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order));

    }

    addFish = fish => {
     //1. Take a copy of existing state
     const fishes = {...this.state.fishes};
     //2.Add a new fish to the copies
     fishes[`fish${Date.now()}`] = fish;
     //3.Set the new fishes object to state
     this.setState({fishes: fishes })
    };

    updateFish = (key, updatedFish) =>{
        //1.copy of current state
        const fishes = {...this.state.fishes};
        //2. update that state
        fishes[key] = updatedFish;
        //3. set that state
        this.setState({fishes});
    };

    deleteFish = key =>{

        //1. Take a copy of state
        const fishes = { ...this.state.fishes};
        //2.update the state
        fishes[key] = null;
        //3.Update state
        this.setState({fishes});
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

    removeFromOrder = (key) => {
        //1. take a copy of state
        const order = {...this.state.order};
        //2Either add or update order
         delete  order[key];
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
           <Order fishes={this.state.fishes} 
           
           order={this.state.order}
           removeFromOrder={this.removeFromOrder}
           /> 
  
            <Inventory 
            addFish={this.addFish}
            updateFish={this.updateFish} 
            deleteFish={this.deleteFish}
            loadSampleFishes={this.loadSampleFishes}
            fishes={this.state.fishes}
            storeId={this.props.match.params.storeId}
            /> 
            </div>

        );
    }

}

export default App;