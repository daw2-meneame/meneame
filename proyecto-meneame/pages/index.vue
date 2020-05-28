<template>
  <div>
    <NewsCard v-for="item in articles" :key="item.id"
      :title="item.title"
      :subtitle="item.subtitle"
      :category="item.category"
      :url="item.url"
    />
  </div>
</template>

<script>
import NewsCard from '@/partials/NewsCard'

export default {

  data(){
    return{
      newArticle:[],
      articles:[
      {
        title:"hola que ase",
        subtitle: "gheugheuogheouge",
        category:"deportes",
        url:"ehgheioghehgeoshge"
        },
         {
        title:"hola que ase",
        subtitle: "gheugheuogheouge",
        category:"cine",
        url:"ehgheioghehgeoshge"
        },
         {
        title:"hola que ase",
        subtitle: "gheugheuogheouge",
        category:"moda",
        url:"ehgheioghehgeoshge"
        }
      ]
    }
  },

  components:{
    NewsCard,
  }
}

</script>

<style>

</style>
