<template>
  <div>
    <MainNav :menu="menu" :category="categories" ></MainNav>
   <!--  :current="currentCategory" @change="changeCurrentCategory"
:articles="articlesFiltered" -->
    <nuxt />
    <MainFooter></MainFooter>
  </div>
</template>

<script>
import MainNav from '@/components/MainNav'
import MainFooter from '@/components/MainFooter'


export default {
   data(){
    return{
         menu: [
        {id: 1, path: "/", name: "Home"},
        //{id: 2, path: "/articles", name: "Articles"},
        {id: 3, path: "/login", name: "Login"},
        {id: 4, path: "/register", name: "Registro"},
        {id: 6, path: "/create", name: "create"},
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
   computed:{
     articlesFiltered(){
      if(this.currentCategory==="all"){
        return this.articles
      }
        return this.articles.filter(item=> item.category === this.currentCategory)
     }
    },
  components:{
    MainNav,
    MainFooter,
  }
}
</script>

<style>

</style>
