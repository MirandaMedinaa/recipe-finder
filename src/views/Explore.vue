<template>
  <div class="about">
    <h1 class="animate">Explore</h1>
    <RecipeGroup></RecipeGroup>
    <div class="margin"></div>
    <Progress></Progress>
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

.margin {
  margin-bottom: 200px;
}
</style> 

<script>
// @ is an alias to /src
import RecipeGroup from "@/components/RecipeGroup.vue";
import Progress from "@/components/Progress.vue";
export default {
  data() {
    return {};
  },
  name: "Explore",
  components: {
    RecipeGroup,
    Progress,
  },
};
</script>
