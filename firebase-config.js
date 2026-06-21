const firebaseConfig = {
  apiKey: "AIzaSyAP0Bn1DQxMQRemv4977KuPA0AhE8yvH54",
  authDomain: "world-cup-predictions-v2.firebaseapp.com",
  projectId: "world-cup-predictions-v2",
  storageBucket: "world-cup-predictions-v2.firebasestorage.app",
  messagingSenderId: "683283790507",
  appId: "1:683283790507:web:61ea7cc9bd33bf57d415ee"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
