import { initializeApp } from "firebase/app";
import { getFirestore, serverTimestamp } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey://buraya boşuna bakma beta
  authDomain://buraya boşuna bakma beta
  databaseURL://buraya boşuna bakma beta
  projectId://buraya boşuna bakma beta
  storageBucket://buraya boşuna bakma beta
  messagingSenderId://buraya boşuna bakma beta
  appId://buraya boşuna bakma beta
};
const firebaseApp = initializeApp(firebaseConfig);
const projectFirestore = getFirestore(firebaseApp);
const projectAuth = getAuth(firebaseApp);
const projectStorage = getStorage(firebaseApp);
const timestamp = serverTimestamp;
export { projectAuth, projectFirestore, timestamp, projectStorage };
