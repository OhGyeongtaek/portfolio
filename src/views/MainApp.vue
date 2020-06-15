<template>
  <div id="wrap-home">
    <div id="home">
      <portfolio-header @nav="navClickHandler"></portfolio-header>
      <div id="content">
        <ul class="content-list" :data-page="newPage">
          <!-- welcome -->
          <li>
            <component :is="welcome" v-if="pageCheck(1)"></component>
          </li>
          <!-- My skills -->
          <li>
            <component :is="skills" v-if="pageCheck(2)"></component>
          </li>
          <!-- portfolio -->
          <li>
            <component :is="portfolio" v-if="pageCheck(3)"></component>
          </li>
          <!-- contact as -->
          <li>
            <component :is="contact" v-if="pageCheck(4)"></component>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import PortfolioHeader from "@/views/home/PortfolioHeader.vue";

@Component({
  components: { PortfolioHeader }
})
export default class MainApp extends Vue {
  private oldPage = 1;
  private newPage = 1;

  private readonly skills = () => this.pageLoader("Skills");
  private readonly welcome = () => this.pageLoader("Welcome");
  private readonly contact = () => this.pageLoader("Contact");
  private readonly portfolio = () => this.pageLoader("Portfolio");

  private pageLoader(name: string) {
    return import(`@/views/home/${name}.vue`);
  }

  private created() {
    // console.log(Pages);
  }

  public navClickHandler(pageNo: number) {
    this.oldPage = this.newPage;
    this.newPage = pageNo;
  }

  private pageCheck(pageNo: number) {
    return pageNo === this.oldPage || pageNo === this.newPage;
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
#content {
  width: 100vw;
  height: 90vh;
  min-height: 90vh;
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
  transition: all 0.5s;
  left: 0%;
  right: 0%;
}
.content-list[data-page="1"] {
  left: 0vw;
}
.content-list[data-page="2"] {
  left: -100vw;
}
.content-list[data-page="3"] {
  left: -200vw;
}
.content-list[data-page="4"] {
  left: -300vw;
}
.content-list > li {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 90vh;
}
</style>
