<template>
		<div class="wrapper">
			<!-- banner -->
			<div class="banner">
				<div class="container">
					<!-- form content / login area -->
					<div class="login-area">
						<!-- heading -->
						<h3>Sign In, To Your Account</h3>
						<form role="form" id="login-form">
							<div class="form-group">
								<input v-model="email" type="email" class="form-control" id="exampleInputUser1" placeholder="Email">
							</div>
							<div class="form-group">
								<input v-model="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
							</div>
							<div class="checkbox form-group">
								<label>
									<input type="checkbox"> Remember me
								</label>
							</div>
							<button v-if="!isAuth" @click.prevent="login" type="submit" class="btn btn-default">Login</button>
							<button v-else  @click.prevent="logout">Logout</button>
						</form>
					</div>
				</div>
			</div>
		</div>

</template>

<script>
export default {
	asyncData(){
		return{
      	isAuth: false,
      	email:"",
			  password:""
		}
	},
	methods:{
    checkAuth(){
    this.isAuth = window.localStorage.getItem("token")!= null
    },
		async login(){
      let loginData = {
        email: this.email,
        password: this.password
      }
      try {
		let response = await this.$axios.post("http://localhost:8082/auth/login", loginData)
		console.log(response.data.token)

		window.localStorage.setItem("token", response.data.token)
		this.checkAuth()
		this.$router.push('/')

      } catch(err){
        console.log(err.response.data.error)
      }
		},
		async logout(){
    	window.localStorage.removeItem("token")
    	this.checkAuth()
		}
	}
}

</script>
