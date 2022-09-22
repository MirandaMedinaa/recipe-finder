<template>
  <div class="about">
    <h3 v-if="bookmarked.length === 0">
      You currently have no bookmarked recipes!
    </h3>
    <b-row>
      <b-card-group
        class="col-md-4"
        v-for="recipe in bookmarked"
        :key="recipe.id"
      >
        <b-card
          class="card mb-2"
          :img-src="require(`../images/${recipe.recipe_url}`)"
          img-alt="Recipe Image"
          img-height="300"
          img-width="450"
        >
          <b-badge class="recipe-time" variant="light"
            ><b-icon class="badge-icon" icon="clock"></b-icon
            >{{ recipe.time }}</b-badge
          >
          <b-badge
            class="skill-level"
            variant="light"
            :style="[
              recipe.skill_level === 'Easy'
                ? { color: 'green' }
                : { color: 'orange' },
              recipe.skill_level === 'Hard' ? { color: 'red' } : {},
            ]"
            ><b-icon class="badge-icon" icon="trophy"></b-icon
            >{{ recipe.skill_level }}</b-badge
          >
          <div class="inside" @click="showModal(recipe)">
            <b-card-text class="title-text un">{{ recipe.title }}</b-card-text>
            <b-card-text class="fix">{{ recipe.description }}</b-card-text>
          </div>
        </b-card>
      </b-card-group>
    </b-row>
    <b-modal
      id="recipeModal"
      @close="closeModal()"
      size="xl"
      hide-header
      hide-footer
      scrollable
    >
      <img :src="recipeModal.recipe_url" class="modal-img" />
      <h4>{{ recipeModal.title }}</h4>
      <b-text>{{ recipeModal.description }}</b-text>
      <h4 class="title-rec">Ingredients</h4>
      <ul v-for="ingredient in recipeModal.ingredients" :key="ingredient.id">
        <li>{{ ingredient }}</li>
      </ul>
      <h4 class="title-rec">Instructions</h4>
      <ol
        type="1"
        v-for="instruction in recipeModal.instructions"
        :key="instruction.id"
      >
        <li>{{ instruction }}</li>
      </ol>
    </b-modal>
  </div>
</template>

<style>
.card {
  margin-top: 15px;
  margin-bottom: 15px;
  margin-right: 15px;
  margin-left: 15px;
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.5) !important;
}

.inside {
  display: flex;
  flex-direction: column;
}

.title-text {
  margin-top: -10px;
  font-size: 25px;
  text-align: center;
}

.description-text {
  font-size: 10px;
  margin-top: 25px;
  text-align: center;
  width: 100%;
  padding-left: 35px;
}

.recipe-time {
  float: left;
  margin-top: -42px;
  margin-left: -15px;
  width: 130px;
  text-align: center;
  color: black;
}

.skill-level {
  float: right;
  margin-top: -42px;
  margin-right: -15px;
  width: 130px;
}

.badge-icon {
  float: left;
  color: black;
}

.bookmark-icon {
  float: left;
}

.modal-img {
  width: 100%;
}

.un {
  display: inline-block;
}

.un:after {
  content: "";
  width: 0px;
  height: 1px;
  display: block;
  background: black;
  transition: 300ms;
  margin-left: 35px;
}

.un:hover:after {
  width: 80%;
}

.animate {
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
export default {
  name: "Bookmarks",
  components: {},
  data() {
    return {
      bookmarked: [],
      recipeModal: {
        title: "",
        description: "",
        recipe_url: "",
        ingredients: "",
        instructions: "",
      },
    };
  },
  mounted() {
    if (localStorage.getItem("bookmarked")) {
      try {
        this.bookmarked = JSON.parse(localStorage.getItem("bookmarked"));
        console.log(this.bookmarked);
      } catch (e) {
        localStorage.removeItem("bookmarked");
      }
    }
  },
  methods: {
    showModal(recipe) {
      this.recipeModal.title = recipe.title;
      this.recipeModal.description = recipe.description;
      this.recipeModal.recipe_url = require(`../images/${recipe.recipe_url}`);
      this.recipeModal.completed = recipe.completed;
      this.recipeModal.ingredients = recipe.ingredients;
      this.recipeModal.instructions = recipe.instructions;
      this.$bvModal.show("recipeModal");
    },
    closeModal() {
      this.$bvModal.hide("recipeModal");
    },
  },
};
</script>
