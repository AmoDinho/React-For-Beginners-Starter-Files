import React from 'react';
import AddFishForm from './AddFishForm';
import Login from './Login';
import EditFishFrom from './editFishForm';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import base, {firebaseApp} from '../base';


class Inventory extends React.Component{
       

    static propTypes ={
      fishes: PropTypes.object,
      updateFish:PropTypes.func,
      deleteFish: PropTypes.func,
      loadSampleFishes: PropTypes.func
    };
    
    state = {
      uid:null,
      owner:null
    };
    
    componentDidMount(){
      firebase.auth().onAuthStateChanged(user =>{
        if(user){
          this.authHandler({user});
        }
      })
    }


    authHandler = async (authData) =>{
      //1. look up the current store in FB DB
      const store = await base.fetch(this.props.storeId, {context:this});
      console.log(store);
      //2. Claim it if there is no owner
      if (!store.owner){
        //save it as our own
        await base.post(`${this.props.storeId}/owner`,{
          data: authData.user.uid
        });

      }
      ///3. compontent should mirror state of current user

      this.setState({
        uid: authData.user.uid,
        owner: store.owner || authData.user.uid
      })

    }
    authenticate = (provider) =>{
      const authProvider = new firebase.auth[`${provider}AuthProvider`]();
      firebaseApp.auth().signInWithPopup(authProvider).then(this.authHandler);
    };

    logout = async () =>{
       await firebase.auth().signOut();
       this.setState({uid:null});
    }

     render() {
        

       const logout = <button onClick={this.logout}>Log Out</button>

       //1. CHECK IF THEY ARE LOGGED IN
       if(!this.state.uid){
        return <Login authenticate={this.authenticate}/>;
       }

       //2. check if they are NOT the owner of store
       if (this.state.uid !== this.state.owner){
         return(
           <div>
             <p>Sorr not the owner!</p>
             {logout}
           </div>
         );
       }
        
       //3. They must be the owner. render the inventory
        return (
          <div className="inventory">
            <h2>Inventory</h2>
            {logout}
            {Object.keys(this.props.fishes).map(key => (
            
            <EditFishFrom 
            key={key}
            index={key}
             fish={this.props.fishes[key]}
             updateFish={this.props.updateFish}
             deleteFish={this.props.deleteFish}
             /> 
            ))}
            <AddFishForm addFish={this.props.addFish}/>
            <button onClick={this.props.loadSampleFishes}>
            Load Sample Fishes
            </button>

            </div>
            
           
         )
     }
}



export default Inventory;
