import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
   
        apiKey: "AIzaSyAW9fARoZrQbvLOszhL4RgBW0Pj-0GeMvQ",
        authDomain: "catch-of-the-day-bd37e.firebaseapp.com",
        databaseURL: "https://catch-of-the-day-bd37e.firebaseio.com"
      
});

const base = Rebase.createClass(firebaseApp.database());

//THis is a name export
export {firebaseApp};

//this is a default export
export default base;
