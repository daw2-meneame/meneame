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
<<<<<<< HEAD
							</div>
						</div>
=======
            <a class="thumbnail" href=""><img src="" alt=""></a>
            <div>
                <h2 class="title">
                    <a href="">{{title}}</a>
                </h2>
                <div>
                    <p>Subido por {{user}}</p>
                </div>
                <div>
                    <p>{{desc}}</p>
                    <button @click="art">btn</button>
                </div>
            </div>
        </div>
    </div>
>>>>>>> 84a9e1461abe3dfd4be3c89e5878554d091f4abc
</template>

<script>
export default {
<<<<<<< HEAD
 props: ["title", "category", "user", "entry", "url"],
 data(){
     return{
         body:"",
     }
 },
=======
 props: ["votes", "title", "user", "desc"],
>>>>>>> 84a9e1461abe3dfd4be3c89e5878554d091f4abc
 methods:{
     art(){
         this.$emit('click')
     }
 }

}
</script>


