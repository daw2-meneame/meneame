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
                    <p>{{desc}}</p>
                    <button @click="art">btn</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
 props: ["votes", "title", "user", "desc"],
 methods:{
     art(){
         this.$emit('click')
     }
 }

}
</script>


