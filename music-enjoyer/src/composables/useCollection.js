import { ref } from "vue";
import { getFirestore, collection, addDoc } from "firebase/firestore";
const db = getFirestore();
const isPending = ref(false)
const useCollection = (collectionName) => {
    const error = ref(null);
    isPending.value = true
    const addDocument = async (docData) => {
        error.value = null;
        try {
            const colRef = collection(db, collectionName);
            await addDoc(colRef, docData);
            isPending.value = false
        } catch (err) {
            console.log(err.message);
            error.value = "could not send the message";
            isPending.value = false
        }
    };
    return { error, addDocument, isPending };
};
export default useCollection;