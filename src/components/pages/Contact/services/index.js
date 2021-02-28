import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyDNwMtn-czNO9kxnEFDu6YdsZk287rQhaQ",
  authDomain: "contactuseterux.firebaseapp.com",
  projectId: "contactuseterux",
  storageBucket: "contactuseterux.appspot.com",
  messagingSenderId: "893835969800",
  appId: "1:893835969800:web:8978c4bcd77cd2ccbb98bd",
  measurementId: "G-4ECWCWB5RB"
};

firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();
// const db = firestore.collection("emails");

let done = "¡Email sent!";
let error = "¡error!";

export async function sendEmailApi(data) {
  firestore.collection("emails").doc().set({
    name: data.name,
    email: data.email,
    comments: data.comments
  }).then(function () {
    console.log(done);
  }).catch(function (error) {
    console.log(error);
  })

}

// import axios from 'axios';
// const baseUrl = "http://localhost:3001";
// const sendEmailUrl = "/api/formContact";

// export async function sendEmailApi(data) {
//   try {
//     const response = await axios({
//       url: baseUrl + sendEmailUrl,
//       method: 'POST',
//       // headers: {
//       //   'Content-Type': 'application/json',
//       // },
//       data: data,
//     });
//     return response;
//   } catch (e) {
//     console.log(e);
//   }
// }