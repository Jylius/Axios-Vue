<template>
    <form @submit.prevent="handleSubmit">
      <h4>Create Playlist</h4>
      <input 
        type="text" 
        required 
        placeholder="Playlist Title" 
        v-model="title"
      >
      <textarea  
        required 
        placeholder="Enter description" 
        v-model="description">
      </textarea>
      <label>Upload playlist cover image</label>
      <input 
        type="file" 
        @change="handleChange"
      >
      <div class="error" v-if="fileError">{{ fileError }}</div>
      <button>Create</button>
    </form>
  </template>
  <script>
  import { ref } from 'vue'
  import useStorage from '@/composables/useStorage'
  export default {
    setup() {
      const {filePath, url, uploadImage} = useStorage()
      const title = ref("");
      const description = ref("");
      const file = ref(null);
      const fileError = ref(null);
      const types = ['image/png', 'image/jpg', 'image/jpeg'];
      const handleChange = (e) => {
        const selected = e.target.files[0];
        if (selected && types.includes(selected.type)) {
          file.value = selected;
          fileError.value = null;
        } else {
          file.value = null;
          fileError.value = "Yalnızca png, jpg veya jpeg dosyaları yükleyebilirsiniz.";
        }
      };
      const handleSubmit = async() => {
        if (file.value) {
            await uploadImage(file.value)
          console.log("Lütfen geçerli bir kapak resmi yükleyin.", url.value);
          return;
        }
        console.log(title.value, description.value, file.value);
      };
      return { title, description, file, fileError, handleSubmit, handleChange };
    }
  };
  </script>
  <style>
  input[type='file'] {
    border: 0;
    padding: 0;
  }
  label {
    font-size: 12px;
    display: block;
    margin-top: 20px;
  }
  button {
    margin-top: 20px;
  }
  .error {
    color: red;
    font-size: 12px;
    margin-top: 5px;
  }
  </style>  