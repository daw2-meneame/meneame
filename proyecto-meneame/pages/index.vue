<template>
  <div>
    <Category :categories="categories" :change="changeCurrentCategory" :current="currentCategory"></Category>

    <NewsCard
      v-for="item in articlesFiltered"
      :key="item.id"
      :title="item.title"
      :subtitle="item.subtitle"
      :category="item.category"
      :url="item.url"
    ></NewsCard>
  </div>
</template>

<script>
import NewsCard from "@/partials/NewsCard";
import Category from "@/components/Category";

export default {
  data() {
    return {
      articles: [
        {
          title: "Articulo 1",
          subtitle: "gheugheuogheouge",
          category: "deportes",
          url: "ehgheioghehgeoshge"
        },
        {
          title: "Articulo 2",
          subtitle: "gheugheuogheouge",
          category: "cine",
          url: "ehgheioghehgeoshge"
        },
        {
          title: "Articulo 3",
          subtitle: "gheugheuogheouge",
          category: "moda",
          url: "ehgheioghehgeoshge"
        }
      ],
      currentCategory: "all",
      categories: [
        { id: 1, title: "all", category: "all" },
        { id: 2, title: "deportes", category: "deportes" },
        { id: 3, title: "cine", category: "cine" },
        { id: 4, title: "moda", category: "moda" }
      ]
    };
  },
  mounted() {
    this.getAllArticles();
  },

  methods: {
    async getAllArticles() {
      let newArticle = {};

      try {
        let response = await this.$axios.get("https://meneame-app.herokuapp.com/articles");
        console.log(response);
        this.articles = response.data;
      } catch (err) {
        console.log("no se conecta");
      }
    },
    changeCurrentCategory(category) {
      this.currentCategory = category;
    }
  },

  computed: {
    articlesFiltered() {
      if (this.currentCategory === "all") {
        return this.articles
      }
      return this.articles.filter(
        item => item.category === this.currentCategory
      );
    }
  },

  components: {
    NewsCard,
    Category
  }
};
</script>

<style>
</style>
