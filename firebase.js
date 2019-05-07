

var firebaseConfig = {
    apiKey: "AIzaSyBPomDijpw0DDKP-nwRWK8QcpG77mEsHtk",
    authDomain: "train2-dcce3.firebaseapp.com",
    databaseURL: "https://train2-dcce3.firebaseio.com",
    projectId: "train2-dcce3",
    storageBucket: "train2-dcce3.appspot.com",
    messagingSenderId: "977225667040",
    appId: "1:977225667040:web:4f22f6cfcdebc6fd"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var storage = firebase.storage();
var storeRef = storage.ref();
var database = firebase.database();