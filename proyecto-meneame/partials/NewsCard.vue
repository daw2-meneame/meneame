<template>
    <div>
        <div>
            <div>
                <div class="votes"><span>{{votes}} votos</span></div>
            </div>
            <a class="thumbnail" href=""><img src="" alt=""></a>
            <div>
                <h2 class="title">
                    <a href="">{{title}}</a>
                </h2>
                <div>
                    <p>Subido por {{user}}</p>
                </div>
                <div>
                    <p>{{body}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
 props: ["votes", "title", "user", "body"],
 data(){
     return{
         body:"",
     }
 },
 methods:{
     async asyncData({ $axios }) {
  let response = await $axios.get('http://localhost:8082')
    this.body = response.data
}
 }
}
</script>


