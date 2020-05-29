<template>
  <div>
<Category :categories="categories"></Category>
    <NewsCard v-for="item in articles" :key="item.id"
      :title="item.title"
      :subtitle="item.subtitle"
      :category="item.category"
      :url="item.url"
    ></NewsCard>

  </div>


</template>

<script>
import NewsCard from '@/partials/NewsCard'
import Category from '@/components/Category'


export default {

  data(){
    return{
      articles:[
      {
        title:"Articulo 1",
        subtitle: "gheugheuogheouge",
        category:"deportes",
        url:"ehgheioghehgeoshge"
        },
         {
        title:"Articulo 2",
        subtitle: "gheugheuogheouge",
        category:"cine",
        url:"ehgheioghehgeoshge"
        },
         {
        title:"Articulo 3",
        subtitle: "gheugheuogheouge",
        category:"moda",
        url:"ehgheioghehgeoshge"
        }
      ],
       currentCategory:"all",
     categories:[
       {id:1, title:"all", slug:"all"},
       {id:2, title:"deportes", slug:"deportes"},
       {id:3, title:"cine", slug:"cine"},
       {id:4, title:"moda", slug:"moda"},
     ],
    }
  },
   mounted(){
     this.getAllArticles()
   },

  methods:{
    async getAllArticles(){
      let newArticle = {}

      try{
      let response = await this.$axios.get("http://localhost:8082/articles")
      console.log(response)
      this.articles = response.data
      }catch(err){
        console.log('no se conecta')
      }
     },
    /*   changeCurrentCategory(slug){
      this.currentCategory = slug
    } */
   },



  components:{
    NewsCard,
    Category

  }
}

</script>

<style>

</style>
