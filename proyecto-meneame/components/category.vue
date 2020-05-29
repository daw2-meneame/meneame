<template>
   <div class="nav  nav-pills mx-auto" >
            <span>Categories:</span>
                    <nuxt-link
                      v-for="category in categories" :key="category.id"
                      class="nav-link" :class="{active: category.slug === current}"
                      href="#" @click.prevent="changeCurrentCategory(category.slug)"
                      >{{category.title}}
                      </nuxt-link>
      </div>
</template>
<script>
export default {
  props:["categories"]
}
</script>
