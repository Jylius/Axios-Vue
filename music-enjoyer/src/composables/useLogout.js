import { ref } from "vue";
import { signOut } from "firebase/auth";
import { projectAuth } from "@/firebase/config";
const error = ref(null);
const isPending = ref(false);
const logout = async () => {
    error.value = null;
    isPending.value = true;
    try {
        await signOut(projectAuth);
        isPending.value = false;
    } catch (err) {
        console.log(err.message);
        error.value = err.message;
        isPending.value = false;
    }
};
const useLogout = () => {
    return { error, logout, isPending };
};
export default useLogout;
