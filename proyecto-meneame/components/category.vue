<template>
   <div class="nav  nav-pills mx-auto" >
            <span>Categories:</span>
                    <nuxt-link
                      v-for="category in categories" :key="category.id"
                      class="nav-link" :class="{active: category.category === current}"
                      to="#" @click.prevent="changeCurrentCategory(category.category)"
                      >{{category.title}}
                      </nuxt-link>
      </div>
</template>
<script>
export default {
  props:["categories", "current"],
  methods:{
    changeCurrentCategory(category){
        this.$emit("change", category)
      },
  }
}
</script>
