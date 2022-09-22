<template>
  <div>
    <b-button v-b-toggle.sidebar-1 class="mb-2 menu-button"
      ><b-icon icon="list" aria-label="Menu"></b-icon
    ></b-button>
    <b-sidebar id="sidebar-1" shadow>
      <h3 class="sidebar-title" name="App name">Beginner's Kitchen</h3>
      <div class="px-3 py-2">
        <nav class="mb-3">
          <b-nav vertical>
            <router-link to="/" class="explore-link">
              Explore
              <b-icon class="icon" icon="search" aria-label="Explore"></b-icon
            ></router-link>
            <router-link to="/weekly" class="weekly-link">
              Weekly Plan
              <b-icon
                class="search-icon"
                icon="calendar3"
                aria-label="Weekly Plan"
              ></b-icon
            ></router-link>
            <router-link to="/bookmarks" class="explore-link">
              Bookmarked
              <b-icon
                class="search-icon"
                icon="bookmark"
                aria-label="Weekly Plan"
              ></b-icon
            ></router-link>
          </b-nav>
        </nav>
      </div>
    </b-sidebar>
  </div>
</template>

<style>
.sidebar {
  width: 20%;
}
.menu-button {
  float: left;
  margin-left: 30px;
  margin-top: -60px;
}
.sidebar-title {
  font-size: 30px;
}
.explore-link {
  margin-top: 30px;
  font-size: 20px;
  color: black;
  text-align: left;
  margin-left: 35px;
}
.explore-link:hover,
.weekly-link:hover {
  text-decoration: underline;
}
.icon {
  width: 20px;
  height: 20px;
  margin-top: -24px;
  margin-left: 10px;
}
.weekly-link {
  margin-top: 30px;
  font-size: 20px;
  text-align: left;
  color: black;
  margin-left: 35px;
}
</style>

<script>
export default {
  name: "Sidebar",
};
</script>