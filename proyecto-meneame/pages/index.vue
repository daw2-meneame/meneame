<template>
<div>

<h2>esta es la página principal</h2>

  <NewsCard v-for="item in articles" :key="item.id"
    :title="item.title"
    :category="item.category"
    :user="item.user"
    :entry="item.entry"
    :url="item.url"
  />

</div>
</template>


<script>
import NewsCard from '~/partials/NewsCard';


export default {
  data(){
    return{
      articles:[
        {id:1, title:"soy el primero", category:"deportes", user:"pepe", entry:"hola soy el primer artículo", url:"http://google.es" }
      ]
    }
  },
  component,
    NewsCard,

 }

</script>

<style>

</style>
