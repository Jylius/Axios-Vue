import { ref } from "vue";
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import getUser from "./getUser";
import { projectStorage } from "@/firebase/config";
const { user } = getUser();
const useStorage = () => {
  const error = ref(null);
  const url = ref(null);
  const filePath = ref(null);
  const uploadImage = async (file) => {
    error.value = null;
    filePath.value = `covers/${user.value.id}/${file.name}`;
    const storageReference = storageRef(projectStorage, filePath.value);
    try {
      const res = await uploadBytes(storageReference, file);
      url.value = await getDownloadURL(res.ref);
    } catch (err) {
      console.error("Upload error:", err.message);
      error.value = "Dosya yüklenirken bir hata oluştu. Lütfen tekrar deneyin.";
    }
  };
  return { url, filePath, error, uploadImage };
};
export default useStorage;