import { FirstPage } from '@material-ui/icons';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyDqtArWGv3Mt2RyK_8nJbKHEsW0e7HUmXE",
    authDomain: "discrodbyme.firebaseapp.com",
    databaseURL: "https://discrodbyme.firebaseio.com",
    projectId: "discrodbyme",
    storageBucket: "discrodbyme.appspot.com",
    messagingSenderId: "1077395160472",
    appId: "1:1077395160472:web:3bb38dac2fbce72419bfed"
};

firebase.initializeApp(firebaseConfig);


export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if (!snapShot.exists) {
        const { displayName, email, photoURL } = userAuth;
        try {
            await userRef.set({
                displayName,
                email,
                photoURL,
                ...additionalData
            })
        } catch (e) {
            console.log(e.message)
        }
    }
    return userRef;

}

export const deleteChannels = async (channel) => {
    const docRef = firestore.doc(`channels/${channel.channel}`);
    const snapShot = await docRef.get();
    if (snapShot.exists) {
        try {
            await docRef.delete();
        } catch (e) {
            console.log(e.message)
        }
    } else {
        alert('False')
    }
}

export const getMessages = (collectionRef) => {
    const messages = collectionRef.docs.map(doc => doc.data());
    const filtered = messages.sort((a, b) => a.createdAt - b.createdAt);
    return filtered;
}
export const createMessage = async (message, currentUser, channel) => {
    const collectionRef = firestore.collection('message');
    const messageRef = collectionRef.doc();
    try {
        const createdAt = new Date();
        await messageRef.set({ message, currentUser, channel, createdAt })
    } catch (e) { console.log(e.message) }

}
export const getChannels = (collections) => {
    const channels = collections.docs.map(doc => doc.data());
    return channels;
}

export const addChannelToCollection = async (currentUser, channel) => {
    const collectionRef = firestore.collection('channels');
    const channelRef = collectionRef.doc(channel);
    const snapShot = await channelRef.get();
    if (!snapShot.exists) {
        const { displayName, email } = currentUser;
        try {
            await channelRef.set
                ({
                    channel,
                    createdBy: { displayName, email }
                })
        } catch (e) {
            console.log(e.message);
        }
    } else {
        alert('Channel Already created')
    }

}

// Google Auth
var provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);



export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;