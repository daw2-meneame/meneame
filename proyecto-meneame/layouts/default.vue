<template>
  <div>
    <MainNav :menu="menu"></MainNav>
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
        {id: 2, path: "/login", name: "Login"},
        {id: 3, path: "/register", name: "Registro"},
        {id: 4, path: "/articles", name: "Artículos"},
        {id: 5, path: "/", name: ""},
      ]
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
