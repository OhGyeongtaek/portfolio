<template>
  <div id="wrap-home">
    <div id="home">
      <portfolio-header></portfolio-header>
      <div id="content">
        <ul class="content-list">
          <!-- welcome -->
          <li class="welcome">
            <h2 class="welcome-text-desktop">
              WELCOME TO OH GYEONG TAEK PORTFOLIO SITE.
            </h2>
            <h2 class="welcome-text-mobile">
              WELCOME TO<br />
              OH GYEONG TAEK<br />
              PORTFOLIO SITE.
            </h2>
            <hr />
            <h3>개발자 오경택의 포트폴리오 사이트에 오신것을 환영합니다.</h3>
            <button class="btn more">
              MORE
            </button>
          </li>
          <!-- My skills -->
          <li></li>
          <!-- portfolio -->
          <li></li>
          <!-- contact as -->
          <li></li>
        </ul>
      </div>
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
  min-height: 500px;
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
}

.content-list > li {
  width: 100vw;
  height: 90vh;
}

.welcome {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
}
.welcome > h2 {
  width: 50%;
  font-size: 3.2rem;
  color: #fff;
  margin: 0 auto;
  font-weight: bold;
}
.welcome hr {
  margin: 30px auto;
  border: 2px solid #f05f40;
  width: 50px;
}
.welcome > h3 {
  font-size: 1rem;
  font-weight: bold;
  opacity: 0.5;
  color: #fff;
}
.welcome > .welcome-text-mobile {
  display: none;
}
.welcome > .btn {
  width: 120px;
  margin: 20px auto;
  background:#f05f40;
  border:1px solid #f05f40;
  color: #fff;
  border-radius: 20px;
}
@media (max-width: 500px) {
  .welcome > .welcome-text-mobile {
    width: 100%;
    display: block;
  }
  .welcome > .welcome-text-desktop {
    display: none;
  }
}
</style>
