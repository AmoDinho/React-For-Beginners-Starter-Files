// let's go!
//We want everything from React
import React from 'react';
import {getFunName} from "../helpers";





//Store Picker Compontent
class StorePicker extends React.Component{
  myInput = React.createRef(); 
  
  goToStore = event => {
    //1.Stop form from submitting
    event.preventDefault();
    //2.get text from that input 
    const storeName = this.myInput.value.value;
    console.log(storeName);
    //3. change the page to /store
    this.props.history.push(`/store/${storeName}`);
  };
  
  
  
  
  render(){
       return (
       
       
        <form className="store-selector" onSubmit={this.goToStore}> 
          <h2>Please Enter A Store</h2>
                     
          <input type ="text" 
          ref={this.myInput}
          required 
          placeholder="Store Name"
          defaultValue={getFunName()}
          />
          <button type="submit">Visit A Store   -></button>
        </form>
        
         
      )
    }

}
 
export default StorePicker; 