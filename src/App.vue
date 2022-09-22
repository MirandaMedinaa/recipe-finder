<template>
  <div class="pagelay" id="app">
    <div id="nav"></div>
    <br />
    <Sidebar></Sidebar>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: orange;
}
</style>

<script>
// @ is an alias to /src
import Sidebar from "@/components/Sidebar.vue";
export default {
  name: "App",
  components: {
    Sidebar,
  },
};
</script>
