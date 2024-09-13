<template>
    <h1>Create an Account</h1>
    <p><input type="text" placeholder="Email" v-model="email" /></p>
    <p><input type="password" placeholder="Password" v-model="password" /></p>
    <p><button @click="register">Save to Firebase</button></p>
</template>

<!-- <script setup>
import { ref } from "vue"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { useRouter } from "vue-router"
const email = ref("")
const password = ref("")
const router = useRouter()
const auth = getAuth()
const register = () => {
    createUserWithEmailAndPassword(auth, email.value, password.value).then(() => {
        console.log("Firebase Register Successful!")
        router.push("/firelogin")
    }).catch((error) => {
        console.log(error.code)
    })
}
</script> -->

<script setup>
import { ref } from 'vue'
import db from '@/firebase/init'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'

const email = ref('')
const password = ref('')

const auth = getAuth()

const register = async () => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value)
        const user = userCredential.user

        await setDoc(doc(db, 'users', user.uid), {
            email: email.value,
            role: 'user'
        })

        email.value = ''
        password.value = ''
        alert('User registered successfully!')
    } catch (error) {
        console.error('Error registering user: ', error)
    }
}
</script>
