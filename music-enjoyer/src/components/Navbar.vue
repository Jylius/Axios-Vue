<template>
    <div class="navbar">
        <nav>
            <img src="@/assets/logom.png" alt="">
            <h1><RouterLink :to="{name: 'home'}">PlayList</RouterLink></h1>
            <div class="links">
                <div v-if="user">
                    <button @click="hanldeLogout">Logout</button>
                </div>
                <div v-else>
                    <router-link  class="btn" :to="{name:'signup'}">Signup</router-link>
                    <router-link  class="btn" :to="{name:'login'}">Login</router-link>
                </div>
            </div>
        
        </nav>
    </div>
</template>
<script>
import useLogout from '@/composables/useLogout';
import getUser from '@/composables/getUser';

import { useRouter } from 'vue-router';
export default {
    setup() {
        const {logout} = useLogout()
        const {user} = getUser()
        const router = useRouter();

        const hanldeLogout = async () => {
            await logout()
            console.log("user logged out");
            router.push({name:"home"})
        }
        return {hanldeLogout, user}
    },
    
}
</script>
<style scoped>
    .navbar{
        padding: 16px 10px;
        margin-bottom: 60px;
        background: #fff;
    }
    nav{
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 1200px;
        margin: 0 auto;
    }
    nav h1{
        margin-left: 20px;
    }
    nav .links {
        margin-left: auto;
    }
    nav .links a, button{
        margin-left: 16px;
        font-size: 14px;
    }
    nav img {
        max-height: 60px;
        
    }
</style>