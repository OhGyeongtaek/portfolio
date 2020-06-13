<template>
  <div id="wrap-home">
    <div id="home">
      <portfolio-header></portfolio-header>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import PortfolioHeader from "@/views/home/home.vue";

@Component({
  components: { PortfolioHeader }
})
export default class MainApp extends Vue {
  private created() {
    //
  }
}
</script>
<style>
html {
  height: 100vh;
  min-height: 100vh;
  overflow-x: hidden;
}
#wrap-home {
  width: 200vw;
  display: flex;
}

#wrap-home > div {
  width: 100vw;
}

#home {
  width:100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("../assets/static/images/header.jpg");
}
#page-list img {
  height: 150px;
}
</style>
