 import firebase from "firebase";

//inicialize seu banco de dados
const firebaseConfig = {
  apiKey: "AIzaSyDHbti_jdHm_St_VrNp4yQrA3tyL6E62BQ",
  authDomain: "projeto60-62843.firebaseapp.com",
  projectId: "projeto60-62843",
  storageBucket: "projeto60-62843.appspot.com",
  messagingSenderId: "673552731494",
  appId: "1:673552731494:web:5c8caafd82e218480f4ca7",
};

  if(!firebase.apps.length){  
  firebase.initializeApp(firebaseConfig); 
  }  
  export default firebase.database();
 

  