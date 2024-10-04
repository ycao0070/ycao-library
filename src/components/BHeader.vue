<template>
  <!-- Using Bootstrap's Header template (starter code) -->
  <!-- https://getbootstrap.com/docs/5.0/examples/headers/ -->
  <div class="container">
    <header class="d-flex justify-content-center py-3">
      <ul class="nav nav-pills">
        <li class="nav-item">
          <router-link to="/" class="nav-link" active-class="active" aria-current="page">Home (Week 5)</router-link>
        </li>
        <!-- <li class="nav-item">
          <router-link to="/about" class="nav-link" active-class="avtive">About</router-link>
        </li> -->
        <!-- <li class="nav-item">
          <router-link to="/addbook" class="nav-link" active-class="avtive">Add Book</router-link>
        </li> -->
        <li class="nav-item">
          <router-link to="/getbookcount" class="nav-link" active-class="avtive">Get Book Count</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/countbookapi" class="nav-link" active-class="avtive">Count Book API</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/jsonbookapi" class="nav-link" active-class="avtive">Get Book Json</router-link>
        </li>
        <li class="nav-item"></li>
        <li class="nav-item">
          <router-link to="/fireaddbook" class="nav-link" active-class="avtive">Firebase Add Book</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/modifyordeletebook" class="nav-link" active-class="avtive">Modify or Delete Book</router-link>
        </li>
        <!-- <li class="nav-item">
          <router-link to="/login" class="nav-link" active-class="active">Login</router-link>
        </li> -->
        <li class="nav-item">
          <router-link to="/firelogin" class="nav-link" active-class="active">Firebase Login</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/fireregister" class="nav-link" active-class="active">Firebase Register</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/weather" class="nav-link" active-class="active">Weather</router-link>
        </li>
        <li class="nav-item" v-if="isAdmin">
          <router-link to="/admin" class="nav-link" active-class="active">Admin</router-link>
        </li>
        <li class="nav-item" v-if="user">
          <button @click="logout" class="nav-link btn btn-link" style="cursor: pointer">Logout</button>
        </li>
        <!-- <li class="nav-item"><a href="#" class="nav-link">Contact us</a></li> -->
      </ul>
    </header>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import db from '@/firebase/init'
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'
import { useRouter } from 'vue-router'

const auth = getAuth()
const router = useRouter()
const user = ref(null)
const isAdmin = ref(false)

onMounted(() => {
  onAuthStateChanged(auth, async (loggedInUser) => {
    if (loggedInUser) {
      user.value = loggedInUser
      const docRef = doc(db, 'users', loggedInUser.uid)
      const docSnap = await getDoc(docRef)
      const userData = docSnap.data()
      const userRole = userData.role
      if (userRole === 'admin') {
          isAdmin.value = true
        } else {
          isAdmin.value = false
        }
    } else {
      user.value = null
    }
  })
})

const logout = async () => {
  try {
    await signOut(auth)
    user.value = null
    router.push('/firelogin')
    isAdmin.value = false
  } catch (error) {
    console.error('Error signing out: ', error)
  }
}
</script>

<style scoped>
.b-example-divider {
  height: 3rem;
  background-color: rgba(0, 0, 0, 0.1);
  border: solid rgba(0, 0, 0, 0.15);
  border-width: 1px 0;
  box-shadow:
    inset 0 0.5em 1.5em rgba(0, 0, 0, 0.1),
    inset 0 0.125em 0.5em rgba(0, 0, 0, 0.15);
}

.form-control-dark {
  color: #fff;
  background-color: var(--bs-dark);
  border-color: var(--bs-gray);
}
.form-control-dark:focus {
  color: #fff;
  background-color: var(--bs-dark);
  border-color: #fff;
  box-shadow: 0 0 0 0.25rem rgba(255, 255, 255, 0.25);
}

.bi {
  vertical-align: -0.125em;
  fill: currentColor;
}

.text-small {
  font-size: 85%;
}

.dropdown-toggle {
  outline: 0;
}
</style>
