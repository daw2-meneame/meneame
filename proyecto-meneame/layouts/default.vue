<template>
  <div>
    <MainNav :menu="menu" ></MainNav>
   <!-- :articles="articlesFiltered" -->
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
