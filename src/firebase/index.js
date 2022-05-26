import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
    getFirestore,
    collection,
    onSnapshot,
    query,
} from "firebase/firestore";
import { useEffect, useState } from "react";

const firebaseConfig = {
    apiKey: "AIzaSyBhIyIXa7XnTCUlU8xXvkYjzOvatDIwEGY",
    authDomain: "grocery-store-497ba.firebaseapp.com",
    projectId: "grocery-store-497ba",
    storageBucket: "grocery-store-497ba.appspot.com",
    messagingSenderId: "469218615618",
    appId: "1:469218615618:web:4482a88637077a003e28db"
  };

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const db = getFirestore(app);

export const useCollection = (path) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        onSnapshot(query(collection(db, path)), (snapshot) => {
            const data = snapshot.docs.map((doc) => {
                return {
                    ...doc.data(),
                    id: doc.id,
                };
            });
            setData(data);
        });
    }, [path]);

    return {
        data,
    };
};
