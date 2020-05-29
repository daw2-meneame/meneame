<template>

<form action="">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      <div >
        <input placeholder="title" v-model="article.title" type="text"/>
        <input placeholder="subtitle" v-model="article.subtitle" type="text"/>
        <input placeholder="category" v-model="article.category" type="text"/>
        <input placeholder="url" v-model="article.url" type="text"/>
        <button @click.prevent="addArticles">Crear articulo</button>
      </div>
   </form>

</template>

<script>
export default {
  data(){
    return{
      article:
        {
        title:"",
        subtitle: "",
        category:"",
        url:""
        },
    }
  },
  methods:{
      async addArticles(){
     /*    let config = {
        headers: {
            'Authorization': `Bearer ${window.localStorage.getItem("token")}`
        }
      } */
      let newArticle = this.article
      console.log('>>este es el articulo',newArticle)
      try{
        let response = await this.$axios.post("http://localhost:8082/articles", newArticle)
          console.log(response, 'entra a esta funcion')
      this.$router.push('/')
      }catch(err){
        console.log('no se conecta')
      }

    }
  },

/*   async getArticle(){
  let response = await this.$axios.get("/articles")
  this.articles = response.data
  }, */

}
</script>

<style>

</style>
