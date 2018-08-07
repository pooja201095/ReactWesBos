import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC3e0-rp2dY2G75AvYvkMwQm8HmWlTzcFs",
    authDomain: "catchoftheday-poojac.firebaseapp.com",
    databaseURL: "https://catchoftheday-poojac.firebaseio.com"
})

const base = Rebase.createClass(firebaseApp.database());

//named export
export {firebaseApp};

//default export
export default base;