import { initializeApp } from "firebase/app";

import {getMessaging, getToken, onMessage} from 'firebase/messaging'

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
const firebaseApp = initializeApp({
    apiKey: "AIzaSyDHe1JcUlSPxfed-PUrzrNpYU_gHjdunYA",
  authDomain: "test-notifications-f49e8.firebaseapp.com",
  projectId: "test-notifications-f49e8",
  storageBucket: "test-notifications-f49e8.appspot.com",
  messagingSenderId: "876201080502",
  appId: "1:876201080502:web:2db57256d7bf3e44a59817"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = getMessaging(firebaseApp);


export const requestForToken = (setTokenFound, setToken) => {
    return getToken(messaging, {vapidKey: "BNM8VXpOvtLmmWo1yQPZhhWu39sDczZ_IA0avNHKtMtIQtOjncIZ0ZWpz_i3j8NCrQB996FzseArMt1Qgd3kdp4"})
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
    new Promise((resolve) => {
        onMessage(messaging, (payload) => {
            resolve(payload);
        })
    })
}