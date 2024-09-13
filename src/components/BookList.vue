<template>
    <div>
        <h1>Books with ISBN > 1000</h1>
        <ul>
            <li v-for="book in books" :key="book.id">
                {{ book.name }} - ISBN: {{ book.isbn }}
            </li>
        </ul>
    </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';
import db from '@/firebase/init';
import { collection, query, where, orderBy, limit, onSnapshot } from 'firebase/firestore';

export default {
    setup() {
        const books = ref([])

        let unsubscribe = null

        const fetchBooks = async () => {
            try {
                const q = query(
                    collection(db, 'books'), 
                    where('isbn', '>', 1000),
                    orderBy('isbn', 'desc'),
                    limit(4)
                )
                
                unsubscribe = onSnapshot(q, (querySnapshot) => {
                    const booksArray = []
                    querySnapshot.forEach((doc) => {
                        booksArray.push({ id: doc.id, ...doc.data() })
                    })
                    books.value = booksArray
                })
            } catch (error) {
                console.error('Error fetching books: ', error)
            }
        }

        onMounted(() => {
            fetchBooks()
        })

        onUnmounted(() => {
            if (unsubscribe) {
                unsubscribe()
            }
        })

        return {
            books
        }
    }
}
</script>