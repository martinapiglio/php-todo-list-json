const { createApp } = Vue

createApp({
	data() {
		return {
            todos: []
		}
	},
    methods:{
        getToDos() {
            axios.get('./server.php').then((res) => {
                this.todos = res.data;
            })
            .catch((err) => {
                this.todos = [];
            })
        }
    },
    mounted() {
        this.getToDos();
    }
}).mount('#app')