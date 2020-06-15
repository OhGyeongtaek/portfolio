<template>
  <div class="welcome">
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
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Welcome extends Vue {
  private created() {
    //
  }
}
</script>
<style>
.welcome {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
}
.welcome > h2 {
  width: 80%;
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
  background: #f05f40;
  border: 1px solid #f05f40;
  color: #fff;
  border-radius: 20px;
}
@media (max-width: 500px) {
  .welcome {
    margin-top: 70px;
  }
  .welcome > .welcome-text-mobile {
    width: 100%;
    display: block;
  }
  .welcome > .welcome-text-desktop {
    display: none;
  }
}
</style>
