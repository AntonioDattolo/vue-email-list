const { createApp } = Vue

const myConfig = {
	
	data() {
		
		return {
			message: 'Welcome to VueJS!'
		}
	},
	methods: {
		stampaMsg() {
			
		}
	},
	mounted(){
		window.vue = this;
	}
};

let app = Vue.createApp(myConfig);
app.mount('#app');