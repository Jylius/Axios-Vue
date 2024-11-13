<template>
    <div>
      <form @submit.prevent="handleSubmit">
        <input v-model="email" type="email" placeholder="Email" />
        <input v-model="password" type="password" placeholder="Password" />
        
        
        <button v-if="!isPending">Login</button>
        <button v-if="isPending" disabled>Loading...</button>
        <div v-if="error">{{ error }}</div>
      </form>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import useLogin from '@/composables/useLogin';
  import { useRouter } from 'vue-router';
  
  export default {
    setup() {
      const email = ref('');
      const password = ref('');
      const { error, login, isPending } = useLogin(); 
      const router = useRouter();
  
     
      const handleSubmit = async () => {
        await login(email.value, password.value);
        if (!error.value) {
          console.log("User logged in successfully");
          router.push({name:"home"})
        }
      };
  
     
      return {
        email,
        password,
        error,
        isPending, 
        handleSubmit,
      };
    },
  };
  </script>
  