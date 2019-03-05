import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAj46jFA0hsLiVe_SuiFNVdUbzi_eZ5324",
  authDomain: "the-best-ever-cc19c.firebaseapp.com",
  databaseURL: "https://the-best-ever-cc19c.firebaseio.com"
});
const base = Rebase.createClass(firebaseApp.database());

//named export
export { firebaseApp };
//this is a default exprot
export default base;
