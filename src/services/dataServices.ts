import firebase from "firebase/app";
import "firebase/firestore";
import fbService from "@/services/fbService";

// Get a Firestore instance
const db = fbService.firestore();
const { Timestamp, GeoPoint } = firebase.firestore;

const postService = db.collection("posts");

export { Timestamp, GeoPoint };
export { postService };
