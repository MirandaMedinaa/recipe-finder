<template>
  <div class="background">
    <div class="footer footer-copyright text-center py-3">
      <h5 class="heading mt-3">Your Cooking Progress:</h5>

      <div class="button_flex">
        <b-progress class="bar" :max="max" variant="success">
          <b-progress-bar
            :value="value"
            :label="`${((value / max) * 100).toFixed(0)}%`"
          ></b-progress-bar>
        </b-progress>

        <b-button class="button" v-b-modal.my-modal>Show More Skills</b-button>
        <b-modal id="my-modal">
          <h4>My Skills:</h4>
          <ul class="green">
            <li>Knife Skills</li>
            <li>Roasting Vegetables</li>
            <li>Cooking Pasta</li>
          </ul>

          <h4>Skills to Learn:</h4>
          <ul class="red">
            <li>Making Puff Pastry</li>
            <li>Master Every Way to Cook an Egg</li>
          </ul>
        </b-modal>
      </div>
    </div>
  </div>
</template>

<style>
.footer {
  width: 100%;

  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0;
  background-color: white;
  margin-bottom: -10px;
}

.button_flex {
  display: flex;
}

.button {
  margin-left: 0px;
  margin-top: -10px;
}

.bar {
  margin: 0 auto;
  width: 75%;
}

.heading {
  margin-bottom: 10px;
}

.green,
.red {
  list-style: none;
}

.green li:before {
  content: "✓";
  color: green;
  padding-right: 5px;
}

.red li:before {
  content: "x";
  color: red;
  padding-right: 10px;
}
</style>

<script>
export default {
  data() {
    return {
      value: 61,
      max: 100,
    };
  },
};
</script>