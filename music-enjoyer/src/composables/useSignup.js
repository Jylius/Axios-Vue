import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
const error = ref(null);
const auth = getAuth();
const isPending =ref(false)
const signup = async (email, password, displayName) => {
    error.value = null;
    isPending.value = true
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        if (!res) {
            throw new Error("Could not complete the signup");
        }
        await updateProfile(res.user, { displayName });
        error.value = null;
        return res;
        isPending.value = false
    } catch (err) {
        console.log(err.message);
        error.value = err.message;
        isPending.value = false
    }
};
const useSignup = () => {
    return { error, signup,isPending };
};
export default useSignup;