import {intializeApp} from "firebase/app";
import {getstorage} from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyAAXvC_I9Llmg1BQerWTF4wRAMhsTlrL_c",
    authDomain: "cognida-62ac3.firebaseapp.com",
    projectId: "cognida-62ac3",
    storageBucket: "cognida-62ac3.appspot.com",
    messagingSenderId: "510752622274",
    appId: "1:510752622274:web:192c70b36efc8cbb701d5b",
    measurementId: "G-470VWCHWWP"
  };

  export const app=intializeApp(firebaseConfig);
  export const storage = getStorage(app);