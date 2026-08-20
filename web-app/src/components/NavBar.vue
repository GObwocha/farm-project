<script setup>
    import {useAuth}  from '@/services/auth.js'
    import { useRouter } from "vue-router";

    const router = useRouter();
    const { logout } = useAuth()
    const isAuthenticated = localStorage.getItem('isAuthenticated')
    const isAdmin = localStorage.getItem('isAdmin')
    const user = JSON.parse(localStorage.getItem('user'))
    let role = 0
    let letter = ''
    if(user){
        role = user.role
        letter = user.firstName[0]
    }

    function logOut(){
        logout()
        router.push('/').then(() => {
            router.go(0)
        });
    }
</script>
 
<template>
    <v-app-bar color="#000">
        <v-app-bar-title >
            <router-link to="/" >
                <v-img src="/logo.png" width="12%" height="12%"></v-img>
            </router-link>
        </v-app-bar-title>
        <v-btn to="/">Home</v-btn>
        <v-btn to="/product">Product</v-btn>
        <v-btn to="/product-detail">Product Detail</v-btn>
        <v-btn icon="mdi-account" v-if="isAuthenticated" variant="tonal">{{letter}}
            <v-menu activator="parent">
                <v-list>
                    <v-list-item>
                        <v-btn color="primary" to="/profile">Profile</v-btn>                        
                    </v-list-item>
                    <v-list-item>
                        <v-btn color="primary" @click="()=> { logOut()}">Logout</v-btn>                        
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-btn>
         <v-btn to="/login" variant="text" v-else >Login</v-btn>
        <v-btn to="/seller-view" v-if="role == 3">Seller View</v-btn>
    </v-app-bar>
</template>