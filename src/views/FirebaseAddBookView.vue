<template>
    <div id="app">
        <h1>Add Book</h1>
        <form @submit.prevent="addBook">
            <div>
                <label for="isbn">ISBN:</label>
                <input type="text" v-model="isbn" id="isbn" required />
            </div>
            <div>
                <label for="name">Name:</label>
                <input type="text" v-model="name" id="name" required />
            </div>
            <button type="submit">Add Book</button>
        </form>
    </div>
    <div class="mt-5">
        <BookList />
    </div>
</template>

<script>
import { ref } from 'vue'
import axios from 'axios'

import BookList from '../components/BookList.vue'
export default {
    setup() {
        const isbn = ref('')
        const name = ref('')

        const addBook = async () => {
            try {
                const isbnNumber = Number(isbn.value)
                if (isNaN(isbnNumber)) {
                    alert('ISBN must have a valid number')
                    return
                }

                const newBook = {
                    isbn: isbnNumber,
                    name: name.value
                }

                const response = await axios.post('https://addbook-3ngcqwo2pq-uc.a.run.app', newBook)

                isbn.value = ''
                name.value = ''
                alert(response.data.message || 'Book added successfully!')
            } catch (error) {
                console.error('Error adding book: ', error)
                alert('Failed to add book.')
            }
        }

        return {
            isbn,
            name,
            addBook
        }
    },
    components: {
        BookList
    }
}
</script>