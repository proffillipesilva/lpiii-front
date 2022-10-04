import { initializeApp } from "firebase/app";

import {getMessaging, getToken, onMessage} from 'firebase/messaging'

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object

const firebaseConfig = {
    apiKey: "AIzaSyDvRwjQ3YDr46M3ErwNL1GqDEuibEm8ycs",
    authDomain: "tcc-fiec-3mod.firebaseapp.com",
    projectId: "tcc-fiec-3mod",
    storageBucket: "tcc-fiec-3mod.appspot.com",
    messagingSenderId: "609225504796",
    appId: "1:609225504796:web:24bc1d46582826a7a347d9",
    measurementId: "G-80M0C3ZNBT"
  };

const firebaseApp = initializeApp(firebaseConfig);

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = getMessaging(firebaseApp);


export const requestForToken = (setTokenFound, setToken) => {
    return getToken(messaging, {vapidKey: "BP7rAFrHPhbM7SvIhH2N0KCO3RWrLJQjoFOmXU_ZAveeiGNsvRr4Rzci1Xpnq2_57DbEj-Cik_dxXK-bBnHSKqQ"})
    .then((currentToken) => {
        if(currentToken){
            console.log("token atual: ", currentToken);
            setTokenFound(true);
            setToken(currentToken)
        } else {
            console.log("Falta permissao")
        }
    }).catch((err) => console.log("Um erro aconteceu - ", err))
}



export const onMessageListener = () => {
    return new Promise((resolve) => {
        onMessage(messaging, (payload) => {
            resolve(payload);
        })
    })
}