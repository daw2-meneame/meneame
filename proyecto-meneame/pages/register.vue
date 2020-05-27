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
								<input v-model="lastname" type="text" class="form-control" id="exampleInputUser1" placeholder="Lastname">
							</div>
							<div class="form-group">
								<input v-model="email" type="email" class="form-control" id="exampleInputUser1" placeholder="Email">
							</div>
							<div class="form-group">
								<input v-model="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
							</div>
							<button type="submit" class="btn btn-default" @click="resgister">Register</button>

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
      showLogin: true
    }
  },
  mounted() {
    this.checkAuth();
  },
  methods: {
    checkAuth(){
      this.isAuth = window.localStorage.getItem("token")!= null
    },
    async register(){
      try{
      //  let auth = await firebase.auth().createUserWithEmailAndPassword(this.email,this.password)
      //  console.log(auth.email.uid)
      }catch(err){
        alert(err.message)
      }
    }
  }
}
</script>

<style>

</style>
