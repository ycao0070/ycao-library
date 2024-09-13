<template>
    <div>
        <h1>Modify or Delete Book</h1>
        <form @submit.prevent="updateBook">
            <div>
                <label for="isbn">ISBN:</label>
                <input type="text" v-model="isbn" id="isbn" required />
            </div>
            <div>
                <label for="name">New Name:</label>
                <input type="text" v-model="name" id="name" required />
            </div>
            <button type="submit">Update Book</button>
        </form>
        
        <form @submit.prevent="deleteBook" class="mt-3">
            <div>
                <label for="isbn">ISBN to Delete:</label>
                <input type="text" v-model="deleteIsbn" id="deleteIsbn" required />
            </div>
            <button type="submit">Delete Book</button>
        </form>
    </div>
    <div class="mt-5">
        <BookList />
    </div>
</template>

<script>
import { ref } from 'vue'
import db from '@/firebase/init'
import { collection, query, where, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore'

import BookList from '@/components/BookList.vue';

export default {
    setup() {
        const isbn = ref('')
        const name = ref('')
        const deleteIsbn = ref('')

        const updateBook = async () => {
            try {
                const isbnNumber = Number(isbn.value)
                if (isNaN(isbnNumber)) {
                    alert('ISBN must be a valid number')
                    return
                }

                const q = query(collection(db, 'books'), where('isbn', '==', isbnNumber))
                const querySnapshot = await getDocs(q)

                if (querySnapshot.empty) {
                    alert('No book found with this ISBN')
                    return
                }

                const bookDoc = querySnapshot.docs[0]
                const bookRef = doc(db, 'books', bookDoc.id)

                await updateDoc(bookRef, {
                    name: name.value
                })

                alert('Book updated successfully!')
                isbn.value = ''
                name.value = ''
            } catch (error) {
                console.error('Error updating book: ', error)
            }
        }

        const deleteBook = async () => {
            try {
                const isbnNumber = Number(deleteIsbn.value)
                if (isNaN(isbnNumber)) {
                    alert('ISBN must be a valid number')
                    return
                }

                const q = query(collection(db, 'books'), where('isbn', '==', isbnNumber))
                const querySnapshot = await getDocs(q)

                if (querySnapshot.empty) {
                    alert('No book found with this ISBN')
                    return
                }

                const bookDoc = querySnapshot.docs[0]
                const bookRef = doc(db, 'books', bookDoc.id)

                await deleteDoc(bookRef)

                alert('Book deleted successfully!')
                deleteIsbn.value = ''
            } catch (error) {
                console.error('Error deleting book: ', error)
            }
        }

        return {
            isbn,
            name,
            deleteIsbn,
            updateBook,
            deleteBook
        }
    },
    components: {
        BookList
    }
}
</script>