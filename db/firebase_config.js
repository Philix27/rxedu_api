const { initializeApp } = require('firebase/app');
const { getFirestore, collection, getDocs, addDoc, setDoc , updateDoc} = require('firebase/firestore/lite');


const firebaseConfig = {
  apiKey: "AIzaSyDSNh9L94vg0UBLP0DhJNsfXAJr7j8YOuw",
  authDomain: "pharmahub-89654.firebaseapp.com",
  projectId: "pharmahub-89654",
  storageBucket: "pharmahub-89654.appspot.com",
  messagingSenderId: "1040313284031",
  appId: "1:1040313284031:web:594c2edb08e7cd45b0dd0a"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


async function getQuestions() {
  const mcqCol = collection(db, 'mcq');
  const questionSnapshot = await getDocs(mcqCol);
  const qList = questionSnapshot.docs.map(doc => doc.data());
  return qList;
}

async function sendQuestions(quesDoc) {
 try {
  const docRef = await addDoc(collection(db, 'mcq'),  quesDoc );  
  updateDoc(docRef,  {"id": docRef.id });  
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}
}


module.exports = sendQuestions;



