import React from 'react';
import PropTypes from 'prop-types';



class editFishForm extends React.Component{
    
static propTypes ={
    fish:PropTypes.shape({
        image: PropTypes.string,
        name: PropTypes.string,
        desc: PropTypes.string,
        status: PropTypes.string,
        price: PropTypes.string 
    }),
    index:PropTypes.string,
    updateFish: PropTypes.func,
}
    
    handleChange = (event) =>{
        console.log(event.currentTarget.value);
        //update that fish
        //1.take a copy of the curent fish
        const updatedFish = { 
            ...this.props.fish,
            [event.currentTarget.name]: event.currentTarget.value
        };
           this.props.updateFish(this.props.index, updatedFish);
    };
    
    render() {

        return (
        
        <div className="fish-edit">
         <input name="name" onChange={this.handleChange} value={this.props.fish.name} type="text" placeholder="Name"/>
        <input name="price" onChange={this.handleChange} value={this.props.fish.price} type="text" placeholder="Price"/>
        <select name="status" onChange={this.handleChange} value={this.props.fish.status} type="text" placeholder="Status">
             <option value="available">Fresh!</option>
             <option value="unavailable">Sold Out!</option>
        </select>

        <textarea name="desc" onChange={this.handleChange} value={this.props.fish.desc} type="text" placeholder="Desc"/>
        <input name="image" onChange={this.handleChange} value={this.props.fish.image} type="text" placeholder="Image"/>
        <button onClick={() => this.props.deleteFish(this.props.index)}> 
        Remove fish
        </button> 
           
    </div>
    
);
     }
}



export default editFishForm;
