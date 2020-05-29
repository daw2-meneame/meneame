<template>
<div class="wrapper">
			<!-- banner -->
			<div class="banner">
				<div class="container">
					<!-- form content / login area -->
					<div class="login-area">
						<!-- heading -->
						<h3>Register, To Your Account</h3>
						<form role="form" id="login-form" v-if="!isAuth">
              <div class="form-group">
								<input v-model="firstname" type="text" class="form-control" id="exampleInputUser1" placeholder="Firstname">
							</div>
              <div class="form-group">
								<input v-model="lastname" type="text" class="form-control" id="exampleInputUser2" placeholder="Lastname">
							</div>
							<div class="form-group">
								<input v-model="email" type="email" class="form-control" id="exampleInputUser3" placeholder="Email">
							</div>
							<div class="form-group">
								<input v-model="password" type="password" class="form-control" id="exampleInputPassword4" placeholder="Password">
							</div>
							<button type="submit" class="btn btn-default" @click.prevent="register">Register</button>

             <h3 class="text-center">¿ya tienes cuenta? </h3>
               <button type="submit" class="btn btn-default"><nuxt-link to="/login" @click="showLogin=true">LOGIN</nuxt-link></button>
						</form>
					</div>
				</div>
			</div>
		</div>
</template>

<script>
export default {
name: 'register',
  data(){
    return {
      isAuth: false,
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    }
  },
  methods:{
  async register(){
      let UserRegistred = {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        password: this.password
      }

      try{
        let response = await this.$axios.post("https://meneame-app.herokuapp.com/users", UserRegistred)

        this.$router.push("/login")
      }catch(err){
        alert(err.response.data.error)
      }
    }
  }
}

</script>

<style>

</style>
