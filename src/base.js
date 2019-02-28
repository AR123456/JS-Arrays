import Rebase from "re-base";
import firebase from "firebase";

const base = Rebase.createClass(firebaseApp.database());

//named export
export { firebaseApp };
//this is a default exprot
export default base;
