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
                console.log(res.data);
                this.todos = res.data;
                console.log(this.todos);
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