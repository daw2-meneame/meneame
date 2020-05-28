<template>

  		<header>
				<!-- navigation -->
 				<nav class="navbar navbar-default" role="navigation">
					<div class="container">
						<!-- Brand and toggle get grouped for better mobile display -->
						<div class="navbar-header">
							<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
								<span class="sr-only">Toggle navigation</span>
								<span class="icon-bar"></span>
								<span class="icon-bar"></span>
								<span class="icon-bar"></span>
							</button>
							<nuxt-link class="navbar-brand" to="/"><img class="img-responsive" src="img/logo.png" alt="Logo" />LOGO</nuxt-link>
						</div>

						<!-- Collect the nav links, forms, and other content for toggling -->
						<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <button>AÑADIR ARTÍCULO</button>
							<ul class="nav navbar-nav navbar-right">
								<li v-for="item in menu" :key="item.id"><nuxt-link :to="item.path" >{{item.name}}</nuxt-link></li>

									</ul>
						</div><!-- /.navbar-collapse -->
					</div><!-- /.container-fluid -->
				</nav>
			</header>

</template>

<script>
export default {
  props:["menu"]
}
</script>
