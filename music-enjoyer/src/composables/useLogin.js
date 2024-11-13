import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const error = ref(null);
const auth = getAuth();
const isPending = ref(false)
const login = async (email, password) => {
    isPending.value = true
    error.value = null;
    try {
        const res = await signInWithEmailAndPassword(auth, email, password);
        error.value = null;
        isPending.value = false
        return res;
    } catch (err) {
        error.value = "Incorrect login bilgileri";
        isPending.value = false
    }
};
const useLogin = () => {
    return { error, login, isPending };
};
export default useLogin;