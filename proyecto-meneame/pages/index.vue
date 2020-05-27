<template>
<div>

<h2>esta es la página principal</h2>

  <NewsCard :desc="desc" @click="ObtenerArticulo" :categories="categories" :current="currentCategory" :change="changeCurrentCategory"></NewsCard>

</div>
</template>

<script>
import NewsCard from '@/partials/NewsCard'

export default {
  data(){
     return{
        desc:"",
        currentCategory:"deportes",
        categories:[
        {id: 1, title:"Deportes", slug:"deportes"},
        {id: 2, title:"Cine", slug:"cine"},
        {id: 3, title:"Viajes", slug:"viajes"},
        {id: 4, title:"Chorradas", slug:"chorradas"}
        ]
     }
  },

 methods:{
  async ObtenerArticulo() {
    let response = await this.$axios.get('http://localhost:8082/articles')
    console.log(response)
    this.desc = response.data
},
 changeCurrentCategory(slug){
          this.currentCategory = slug
 },
  components:{
    NewsCard
  }
 }
}

</script>

<style>

</style>
