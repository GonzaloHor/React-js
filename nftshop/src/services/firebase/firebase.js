import { initializeApp }from 'firebase/app'
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyCFwQsomyLhuC_7deQ_E2PcPVtALCjqHm0",
    authDomain: "nftshop-coderhouse.firebaseapp.com",
    projectId: "nftshop-coderhouse",
    storageBucket: "nftshop-coderhouse.appspot.com",
    messagingSenderId: "42246454268",
    appId: "1:42246454268:web:f081417107fcdaa31f9079"
  };


  const app = initializeApp(firebaseConfig)

  export const db = getFirestore(app)
