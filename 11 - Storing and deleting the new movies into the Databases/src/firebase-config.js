import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
const firebaseConfig = {
	apiKey: "AIzaSyDQqvKTtztouSH3cZdYMDjHtfWml96czjI",
	authDomain: "crud-operation-79560.firebaseapp.com",
	projectId: "crud-operation-79560",
	storageBucket: "crud-operation-79560.appspot.com",
	messagingSenderId: "823890388683",
	appId: "1:823890388683:web:032be75d954be15fa25d4e",
	measurementId: "G-VC6M0EYWM1",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
