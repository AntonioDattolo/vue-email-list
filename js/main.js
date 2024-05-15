const { createApp } = Vue

const myConfig = {
	
	data() {
		
		return {
			message: 'Welcome to VueJS!',
			mailList:[],
			mail : 0
		}
	},
	methods: {
		// getMail(){
		// 	axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`).then((response) => {
		// 		let result = response.data.response
		// 	  console.log(result);
			  
		// 	});
		// }
		getMail() {
		for(x=0; x < 10;x++){

				axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`).then((result) => { //attenzione all'arrow function!!
                let mail = result.data.response;
                console.log("Ricevuta risposta",  mail);
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