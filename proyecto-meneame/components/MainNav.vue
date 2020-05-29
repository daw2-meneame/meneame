<template>

  		<header>
				<!-- navigation -->
 				<nav class="navbar navbar-default" role="navigation">
					<div class="container">
						<div class="row">
							<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
								<nuxt-link class="navbar-brand d-sm-inline-block" to="/"><img class="img-responsive" src="img/logo.png" alt="Logo" />LOGO
								</nuxt-link>

								<ul class="nav navbar-nav navbar-right d-sm-inline-block">

								<li class="nav-link" v-for="item in menu" :key="item.id">
								<nuxt-link :to="item.path">{{item.name}}</nuxt-link>
								</li>
								</ul>
							</div>
						</div>
					</div>
				</nav>
			</header>

</template>

<script>
export default {
	props:["menu"],

}
</script>
