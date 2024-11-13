<template>
    <div>
      <form @submit.prevent="handleSubmit">
        <h3>Signup</h3>
        <hr><br>
        
        <label>Name</label>
        <input v-model="displayname" type="text" placeholder="Enter your name" />
        
        <label>Email</label>
        <input v-model="email" type="email" placeholder="Email" />
        
        <label>Password</label>
        <input v-model="password" type="password" placeholder="Password" />
        
        <label>Password Again</label>
        <input v-model="passwordAgain" type="password" placeholder="Confirm Password" />
        
        <button v-if="!isPending" type="submit">Signup</button>
        <button v-if="isPending" type="submit" disabled>Loading...</button>
        
        <div v-if="error">{{ error }}</div>
      </form>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import useSignup from '@/composables/useSignup';
  
  export default {
    setup() {
      const { error, signup, isPending } = useSignup();
  
      const email = ref("");
      const displayname = ref("");
      const password = ref("");
      const passwordAgain = ref("");
  
      const handleSubmit = async () => {
        if (password.value !== passwordAgain.value) {
          error.value = "Passwords do not match!";
          return;
        }
        
        const res = await signup(email.value, password.value, displayname.value);
        if (!error.value) {
          console.log("User successfully registered");
        }
      };
  
      return {
        handleSubmit,
        email,
        displayname,
        password,
        passwordAgain,
        isPending,
        error
      };
    },
  };
  </script>
  