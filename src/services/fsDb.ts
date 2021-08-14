import firebase from "firebase/app";
import "firebase/firestore";

// Get a Firestore instance
const db = firebase
  .initializeApp({ projectId: "kingdom-wiki-4f5f9" })
  .firestore();
const { Timestamp, GeoPoint } = firebase.firestore;

const postDB = db.collection("posts");

export { Timestamp, GeoPoint };
export { postDB };
