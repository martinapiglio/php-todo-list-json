const { createApp } = Vue

createApp({
	data() {
		return {
            todos: [],
            newToDo: '',
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
        },

        addToDo() {
      
            let data = {
                newToDo: this.newToDo,
            };
      
            axios.post('./server.php', data, {headers: {'Content-Type': 'multipart/form-data'}}).then(res => {
                this.getToDos();
            });

            this.newToDo = '';
        },

        changeStatus(element) {
            element.done = !element.done;
        }

    },

    mounted() {
        this.getToDos();
    }
}).mount('#app')