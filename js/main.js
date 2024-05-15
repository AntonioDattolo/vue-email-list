const { createApp } = Vue

const myConfig = {
	
	data() {
		
		return {
			message: 'Welcome to VueJS!',
			mailList:[],
			mail : 0,
			howMuch : null
		}
	},
	methods: {
		getMail() {
			for (x = 0; x < this.howMuch; x++) {
				axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`).then((result) => {
					let mail = result.data.response;
					console.log("Ricevuta risposta", mail);
					this.mailList.push(mail)
				});
			}
		}
	},
	mounted(){
		window.vue = this
	}
};

let app = Vue.createApp(myConfig);
app.mount('#app');