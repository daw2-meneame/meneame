<template>
		<div class="container">
			<div class="row">
				<div class="col-md-12 col-sm-12">
					<div class="entry">
						<h3><a href="#">{{title}}</a></h3>
						<span class="meta">
						category: {{category}} | <!-- by: {{}} --> | a: {{url}}
						</span>
						<p>{{subtitle}}</p>

						<div class="votes"><span>votos</span></div>

				   </div>
		        </div>
	        </div>
        </div>
</template>

<script>
export default {
 props: ["title", "category", "subtitle", "url"],
 data(){
     return{
         body:"",
     }
 },
 }
</script>
