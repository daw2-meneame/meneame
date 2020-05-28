<template>
<div class="blog" id="blog">
				<div class="container">
					<div class="row">
						<div class="col-md-12 col-sm-12">
							<div class="entry">
								<h3><a href="#">{{title}}</a></h3>
								<span class="meta">
									category: {{category}} | by: {{user.uid}} | a: {{url}}
								</span>
								<p>{{entry}}</p>
            <div>
                <div class="votes"><span>votos</span></div>
            </div>
							</div>
						</div>
</template>


<script>
export default {
   props: ["title", "category", "user", "entry", "url"],
 data(){
     return{
         body:"",
     }
 },
/*  methods:{
     art(){
         this.$emit('click')
     }
 } */
}
</script>
