// Vue
var app = new Vue({
	el: '#app',
	data: {
		dataName: [],
		is: '商户管理'
	},
	mounted(){
	    this.init()
	},
	methods:{
	    init(){
	        console.log('hello,world')
	    }
	},
	created(){
		var thin = this
		axios.get('../json/user.json', {
				params: {}
			})
			.then(function(response) {
				thin.dataName = response.data.data
			})
			.catch(function(error) {
				console.log(error);
			});
	}
})
