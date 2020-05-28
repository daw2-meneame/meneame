<template>
<div>

<h2>esta es la página principal</h2>

<<<<<<< HEAD
  <NewsCard v-for="item in articles" :key="item.id"
    :title="item.title"
    :category="item.category"
    :user="item.user"
    :entry="item.entry"
    :url="item.url"
  />
=======
  <NewsCard :desc="desc" @click="ObtenerArticulo" :categories="categories" :current="currentCategory" :change="changeCurrentCategory"></NewsCard>
>>>>>>> 84a9e1461abe3dfd4be3c89e5878554d091f4abc

</div>
</template>

<script>
import NewsCard from '@/partials/NewsCard'

export default {
  data(){
<<<<<<< HEAD
    return{
      articles:[
        {id:1, title:"soy el primero", category:"deportes", user:"pepe", entry:"hola soy el primer artículo", url:"http://google.es" }
      ]
    }
  },
  component,
    NewsCard,

=======
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
>>>>>>> 84a9e1461abe3dfd4be3c89e5878554d091f4abc
 }
}

</script>

<style>

</style>
