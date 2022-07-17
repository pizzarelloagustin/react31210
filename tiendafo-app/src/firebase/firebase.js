import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDmxaZuzaFLPWhIh2dpGeNFLVQ69cpJjT4",
    authDomain: "tiendafo-pizzarello.firebaseapp.com",
    projectId: "tiendafo-pizzarello",
    storageBucket: "tiendafo-pizzarello.appspot.com",
    messagingSenderId: "269388230069",
    appId: "1:269388230069:web:d7f81245416546a9533dfc"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);