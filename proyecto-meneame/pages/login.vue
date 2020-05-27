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
							<button type="submit" class="btn btn-default" @click="login">Login</button>
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
            email:"",
            password:""
        }
  },
  methods:{
     async login(){
      let loginData = {
        email: this.email,
        password: this.password
      }
      try{
        let response = await this.$http.post("auth/login", loginData)
        window.localStorage.setItem("token",response.data.token)
        this.checkAuth()
      }catch(e){
        console.log("Se ha producido un error")
      }
    },
    async logout(){
      window.localStorage.removeItem("token")
      this.checkAuth()
    },
  }
}
</script>
