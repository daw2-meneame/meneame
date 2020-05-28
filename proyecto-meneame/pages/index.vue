<template>
<div>

  <NewsCard v-for="item in articles" :key="item.id"
    :title="item.title"
    :category="item.category"
    :user="item.user"
    :entry="item.entry"
    :url="item.url"
  />
      <button @click="getArticles">Obtener los artículos</button>

</div>
</template>

<script>
import NewsCard from '@/partials/NewsCard'

export default {
  data(){
    return{
      articles:[
        {id:1, title:"soy el primero", category:"deportes", user:"pepe", entry:"hola soy el primer artículo", url:"http://google.es" }
      ]
    }
  },
  async getArticles(){
      let config = {
        headers: {
            'Authorization': `Bearer ${window.localStorage.getItem("token")}`
        }
      }
      let response = await this.$axios.get("articles", config)
      this.articles = response.data
    },

  components:{
    NewsCard
  }

 }


</script>

<style>

</style>
