// let's go!
//We want everything from React
import React , {Fragment} from 'react';


//Store Picker Compontent
class StorePicker extends React.Component{
   render(){

     {/* Comment */}
       return(
       <Fragment>
        <p>Fish!</p>
        <form className="store-selector">
          <h2>Please Enter A Store</h2>
          
          <input type ="text" required placeholder="Store Name"/>
          <button type="submit">Visit A Store   -></button>
        </form>
        
       </Fragment>    
      )
    }

}
 
export default StorePicker; 