<template>

<form action="">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      <div >
        <input placeholder="title" v-model="article.title" type="text"/>
        <input placeholder="subtitle" v-model="article.subtitle" type="text"/>
         <select class="form-control" id="exampleFormControlSelect1" v-model="article.category">
            <option>deportes</option>
            <option>cine</option>
            <option>moda</option>
            <option>otros</option>
         </select>
       <input placeholder="url" v-model="article.url" type="text"/>
        <button @click.prevent="addArticle">Crear articulo</button>
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

      async addArticle(){
            let config = {
              headers: {
                'Authorization': `Bearer ${window.localStorage.getItem("token")}`
              }
            }
        let newArticle = {
          title: this.article.title,
          subtitle: this.article.subtitle,
          category: this.article.category,
          url: this.article.url
        }
        try {
          let response = await this.$axios.post("http://localhost:8082/articles", newArticle, config)
          this.$router.push('/')
        } catch(err) {
          console.log('no se conecta')
        }

    }
  }
}

</script>

