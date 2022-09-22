<template>
  <div class="about">
    <h1 class="animate">Bookmarked Recipes</h1>
    <Bookmarked></Bookmarked>
  </div>
</template>

<style scoped>
.animate {
  font-size: 55px;
  margin-bottom: 30px;
  animation: fadeIn 1s ease-in both;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translate3d(0, -20%, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
</style>

<script>
// @ is an alias to /src
import Bookmarked from "@/components/Bookmarked.vue";
export default {
  data() {
    return {};
  },
  name: "Bookmarks",
  components: {
    Bookmarked,
  },
};
</script>
