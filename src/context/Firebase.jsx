import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase , set , ref} from "firebase/database";
import { createContext , useContext} from "react";

const firebaseConfig = {
  apiKey: "AIzaSyBb1XMF6DFZrK-XgCMvbfirebaseapp.com",
  projectId: "contest-submit-form",
  storageBucket: "contest-submit-form.appspot.com",
  messagingSenderId: "829426711705",
  appId: "1:829426711705:web:452f09dfdca48d95228c08",
  databaseURL: "https://contest-submit-form-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);

const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext);


export const FirebaseProvider = (props) => {
  const putData = (key, data) => set(ref(database, key), data);
  return (
    <FirebaseContext.Provider value={{ putData }}>
      {props.children}
    </FirebaseContext.Provider>
  );
};
