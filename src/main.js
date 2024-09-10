// import './assets/main.css'
// import '@/assets/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
// import DataTable from 'primevue/datatable'
// import Column from 'primevue/Column'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfjxDeYCnx8EpH5aBvz7hyqX_BpESCavU",
  authDomain: "week7-yuxuan.firebaseapp.com",
  projectId: "week7-yuxuan",
  storageBucket: "week7-yuxuan.appspot.com",
  messagingSenderId: "970637380430",
  appId: "1:970637380430:web:e9f8af8b5b71b0fd716c1f"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const app = createApp(App)
app.use(PrimeVue, { theme: { preset: Aura } })
app.use(router)
app.use(store)

// app.component('DataTable', DataTable)
// app.component('Column', Column)



app.mount('#app')
