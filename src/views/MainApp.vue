<template>
  <div id="wrap-home">
    <div id="home">
      <portfolio-header @nav="navClickHandler"></portfolio-header>
      <div id="content">
        <ul class="content-list" :data-page="page">
          <!-- welcome -->
          <li class="welcome" v-if="page === 1">
            <welcome></welcome>
          </li>
          <!-- My skills -->
          <li>
            <h1>스킬!!</h1>
          </li>
          <!-- portfolio -->
          <li>
            <h1>포폴!!</h1>
          </li>
          <!-- contact as -->
          <li>
            <h1>컨텍트!!</h1>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import PortfolioHeader from "@/views/home/PortfolioHeader.vue";
import Welcome from "@/views/home/Welcome.vue";

@Component({
  components: { PortfolioHeader, Welcome }
})
export default class MainApp extends Vue {
  private page = 1;
  private pageImport = {
    page1: false,
    page2: false,
    page3: false,
    page4: false
  };

  private created() {
    //
  }

  public navClickHandler(pageNo: number) {
    if (pageNo === 1) {
      // this.pageImport.page1 = true;
      // console.log(Vue.components);
    }
    this.page = pageNo;
  }
}
</script>
<style>
html {
  min-height: 100vh;
  overflow-x: hidden;
}
#wrap-home > #home {
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("../assets/static/images/header.jpg");
}
.content {
  width: 100vw;
  height: 100vh;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
}
.content-list {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 400vw;
  display: flex;
  position: absolute;
  transition: left 0.5s;
}
.content-list[data-page="1"] {
  left: 0%;
}
.content-list[data-page="2"] {
  left: -100%;
}
.content-list[data-page="3"] {
  left: -200%;
}
.content-list[data-page="4"] {
  left: -300%;
}
.content-list > li {
  width: 100vw;
  height: 90vh;
}
</style>
