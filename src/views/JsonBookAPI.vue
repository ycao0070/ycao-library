<template>
    <pre>
        {{ jsondata }}
    </pre>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            jsondata: null,
            error: null
        }
    },
    mounted() {
        this.getJsonBookAPI()
    },
    methods: {
        async getJsonBookAPI() {
            try {
                const response = await axios.get('https://getjsonbooks-3ngcqwo2pq-uc.a.run.app')
                this.jsondata = response.data
                this.error = null
            } catch (error) {
                console.error('Error fetching books:', error)
                this.error = error
                this.count = null
            }
        }
    }
}
</script>