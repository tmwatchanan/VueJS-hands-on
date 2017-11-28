import Firebase from 'firebase'

/* Firebase configuration */
let config = {
    apiKey: "AIzaSyCWLR2EOuD318bckWtRmFyePEWPqTYbO3w",
    authDomain: "vuejs-authen.firebaseapp.com",
    databaseURL: "https://vuejs-authen.firebaseio.com",
    projectId: "vuejs-authen",
    storageBucket: "gs://vuejs-authen.appspot.com/",
    messagingSenderId: "581423540632"
};

const firebaseApp = Firebase.initializeApp(config);
const db = firebaseApp.database();

export {firebaseApp, db};