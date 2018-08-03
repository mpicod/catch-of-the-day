import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD458HL0YOeMX8hfCXASO1DhNpQlTRfDIo",
    authDomain: "catch-of-the-day-martin-1.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-martin-1.firebaseio.com",
});
// firebase app
const base = Rebase.createClass(firebaseApp.database());
// rebase app


// named export
export {firebaseApp};

// export par défaut
export default base;