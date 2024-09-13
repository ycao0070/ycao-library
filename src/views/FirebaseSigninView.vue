<template>
    <h1>Sign in</h1>
    <p><input type="text" placeholder="Email" v-model="email" /></p>
    <p><input type="password" placeholder="Password" v-model="password" /></p>
    <p><button @click="signin">Sign in via Firebase</button></p>
</template>

<!-- <script setup>
import { ref } from "vue"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { useRouter } from "vue-router"
const email = ref("")
const password = ref("")
const router = useRouter()
const auth = getAuth()
const signin = () => {
    signInWithEmailAndPassword(auth, email.value, password.value).then(() => {
        console.log("Firebase Sign in Successful!")
        router.push("/")
        console.log(auth.currentUser)
    }).catch((error) => {
        console.log(error.code)
    })
}
</script> -->

<script setup>
import { ref } from "vue"
import db from "@/firebase/init";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { useRouter } from "vue-router"
import { doc, getDoc } from "firebase/firestore";

const email = ref("")
const password = ref("")
const router = useRouter()
const auth = getAuth()

const signin = async () => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value)
        const user = userCredential.user

        const docRef = doc(db, 'users', user.uid)
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
            console.log("Firebase Sign in Successful!")
            const userData = docSnap.data()
            const userRole = userData.role

            if (userRole === 'admin') {
                router.push('/admin')
            } else if (userRole === 'user') {
                router.push('/')
            }

            console.log(auth.currentUser)
        } else {
            console.log('Incorrect username or password.')
            console.log("Document data:", user.data());
        }
    } catch (error) {
        console.error('Error signing in user: ', error)
    }
}
</script>
