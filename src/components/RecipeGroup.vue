<template>
  <div>
    <h3 v-if="filter.length === 0">
      You currently have no bookmarked recipes!
    </h3>
    <b-button v-b-modal.modal-1 class="button" variant="light"
      >Filter By Ingredient</b-button
    >
    <b-modal id="modal-1" title="Filter By Ingredient">
      <b-form-group label="Choose ingredients:" v-slot="{ ariaDescribedby }">
        <b-form-checkbox-group
          id="checkbox-group-1"
          v-model="selected"
          :options="options"
          :aria-describedby="ariaDescribedby"
          name="flavour-1"
        ></b-form-checkbox-group>
      </b-form-group>
    </b-modal>

    <b-button v-b-modal.modal-2 class="button" variant="light"
      >Filter By Level</b-button
    >
    <b-modal id="modal-2" title="Filter By Level">
      <b-form-group label="Choose a level:" v-slot="{ ariaDescribedby }">
        <b-form-checkbox-group
          id="checkbox-group-2"
          v-model="level_selected"
          :options="level_options"
          :aria-describedby="ariaDescribedby"
          name="flavour-2"
        ></b-form-checkbox-group>
      </b-form-group>
    </b-modal>
    <b-button v-b-modal.modal-3 class="button" variant="light"
      >Filter By Time</b-button
    >
    <b-modal id="modal-3" title="Filter By Time">
      <b-form-group
        label="Choose a desired cooking duration:"
        v-slot="{ ariaDescribedby }"
      >
        <b-form-checkbox-group
          id="checkbox-group-3"
          v-model="time_selected"
          :options="time_options"
          :aria-describedby="ariaDescribedby"
          name="flavour-3"
        ></b-form-checkbox-group>
      </b-form-group>
    </b-modal>
    <b-row>
      <b-card-group class="col-md-4" v-for="recipe in filter" :key="recipe.id">
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
          <b-icon
            @click="bookmark(recipe)"
            class="bookmark-icon"
            :icon="recipe.bookmarked ? 'bookmark-fill' : 'bookmark'"
          ></b-icon>
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
      size="lg"
      hide-header
      hide-footer
      scrollable
    >
      <img :src="recipeModal.recipe_url" class="modal-img" height="560" />
      <h4 class="title-card">{{ recipeModal.title }}</h4>
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

      <div v-if="recipeModal.title == 'Veggie Pizza'">
        <h4>Video Example</h4>
        <p>
          Check out this recipe on YouTube:
          <a :href="recipeModal.video">Veggie</a>
        </p>
      </div>
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
  color: black !important;
}

.skill-level {
  float: right;
  margin-top: -42px;
  margin-right: -15px;
  width: 130px;
}

.title-rec {
  display: block;
  margin-top: 20px;
}

.badge-icon {
  float: left;
  color: black;
}

.title-card {
  margin-top: 20px;
}

.bookmark-icon {
  float: left;
}

.modal-img {
  width: 100%;
}

.un {
  display: inline-block;
  cursor: pointer;
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

.button {
  margin: 10px 10px 10px 10px;
}
</style>

<script>
import recipes from "./../../public/meals.json";
export default {
  name: "RecipeGroup",
  components: {},
  data: function () {
    return {
      recipes: recipes,
      selected: [],
      options: [
        { text: "Zucchini", value: "zucchini" },
        { text: "Shrimp", value: "shrimp" },
        { text: "Lamb", value: "lamb" },
        { text: "Pasta", value: "pasta" },
        { text: "Beef", value: "beef" },
        { text: "Lemon", value: "lemon" },
        { text: "Chicken", value: "chicken" },
      ],

      level_selected: [],
      level_options: [
        { text: "Easy", value: "Easy" },
        { text: "Medium", value: "Medium" },
        { text: "Hard", value: "Hard" },
      ],

      time_selected: [],
      time_options: [
        { text: "0-15 minutes", value: "15 minutes" },
        { text: "16-30 minutes", value: "30 minutes" },
        { text: "31-45 minutes", value: "45 minutes" },
        { text: "46-60+ minutes", value: "60 minutes" },
      ],
      bookmarked: [],
      recipeModal: {
        title: "",
        description: "",
        recipe_url: "",
        ingredients: "",
        instructions: "",
        video: "",
      },
    };
  },

  mounted() {
    if (localStorage.getItem("selected")) {
      try {
        this.selected = JSON.parse(localStorage.getItem("selected"));
      } catch (e) {
        localStorage.removeItem("selected");
      }
    }
    if (localStorage.getItem("level_selected")) {
      try {
        this.level_selected = JSON.parse(
          localStorage.getItem("level_selected")
        );
      } catch (e) {
        localStorage.removeItem("level_selected");
      }
    }
    if (localStorage.getItem("time_selected")) {
      try {
        this.time_selected = JSON.parse(localStorage.getItem("time_selected"));
      } catch (e) {
        localStorage.removeItem("time_selected");
      }
    }
  },

  watch: {
    bookmarked: {
      deep: true,
      handler: function (newValue) {
        localStorage.setItem("bookmarked", JSON.stringify(this.bookmarked));
        console.log("New bookmarked recipe", newValue);
      },
    },
    selected: {
      deep: true,
      handler: function (newValue) {
        localStorage.setItem("selected", JSON.stringify(this.selected));
        console.log("Selected ingredients changed", newValue);
      },
    },
    level_selected: {
      deep: true,
      handler: function (newValue) {
        localStorage.setItem("completed", JSON.stringify(this.level_selected));
        console.log("Selected level changed", newValue);
      },
    },
    time_selected: {
      deep: true,
      handler: function (newValue) {
        localStorage.setItem("completed", JSON.stringify(this.time_selected));
        console.log("Selected time changed", newValue);
      },
    },
  },

  computed: {
    filter() {
      let recipes = this.recipes;
      if (this.selected.length > 0) {
        let selected = this.selected;
        let filtered_recipes = [];
        for (let recipe = 0; recipe < recipes.length; recipe++) {
          for (
            let ingredient = 0;
            ingredient < recipes[recipe].ingredients.length;
            ingredient++
          ) {
            if (
              selected.some((selected) =>
                recipes[recipe].ingredients[ingredient]
                  .toLowerCase()
                  .includes(selected)
              )
            ) {
              filtered_recipes.push(recipes[recipe]);
            }
          }
        }
        if (filtered_recipes.length > 0) {
          recipes = filtered_recipes;
        }
        return recipes;
      }

      if (this.level_selected.length > 0) {
        recipes = this.recipes.filter((recipe) =>
          this.level_selected.includes(recipe.skill_level)
        );
        return recipes;
      }
      if (this.time_selected.length > 0) {
        recipes = this.recipes.filter((recipe) =>
          this.time_selected.includes(recipe.time)
        );
        return recipes;
      }
      return recipes;
    },
  },

  methods: {
    showModal(recipe) {
      this.recipeModal.title = recipe.title;
      this.recipeModal.description = recipe.description;
      this.recipeModal.recipe_url = require(`../images/${recipe.recipe_url}`);
      this.recipeModal.ingredients = recipe.ingredients;
      this.recipeModal.instructions = recipe.instructions;
      this.recipeModal.video = recipe.video;
      this.$bvModal.show("recipeModal");
    },
    closeModal() {
      this.$bvModal.hide("recipeModal");
    },
    bookmark(recipe) {
      const recipeIndex = this.recipes.indexOf(recipe);
      this.recipes[recipeIndex].bookmarked =
        !this.recipes[recipeIndex].bookmarked;
      if (this.recipes[recipeIndex].bookmarked)
        this.bookmarked.push(this.recipes[recipeIndex]);
      if (!this.recipes[recipeIndex].bookmarked)
        this.bookmarked.pop(this.recipes[recipeIndex]);
    },
  },
};
</script>