import { ref } from "vue";
import { getFirestore, collection, query, orderBy, onSnapshot } from "firebase/firestore";
const db = getFirestore();
const getCollection = (collectionName) => {
    const error = ref(null);
    const documents = ref(null);
    const q = query(collection(db, collectionName), orderBy("createdAt"));
    onSnapshot(
        q,
        (snapshot) => {
            let results = [];
            snapshot.docs.forEach((doc) => {
                doc.data().createdAt && results.push({ ...doc.data(), id: doc.id });
            });
            documents.value = results;
            error.value = null;
        },
        (err) => {
            console.log(err.message);
            documents.value = null;
            error.value = "could not fetch data";
        }
    );
    return { documents, error };
};
export default getCollection;
