<template>
  <b-card>
    <div class="header">
      <h4>My Skills</h4>
    </div>
    <div class="contents">
      <div class="web-skills">
        <div class="sub-title">
          <h5>Web Skills</h5>
        </div>
        <div class="skills-content web-skills br-b">
          <img src="@/assets/static/images/skills/html.png" alt="">
          <img src="@/assets/static/images/skills/css.png" alt="">
          <img src="@/assets/static/images/skills/js.png" alt="">
          <img src="@/assets/static/images/skills/jquery.png" alt="">
        </div>
      </div>
    </div>
  </b-card>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
@Component({})
export default class Skills extends Vue {}
</script>
<style>
.br-b {
  border-bottom:1px solid #ccc;
  padding:8px 0;
}
.card {
  width: 50vw;
  height: 50vh;
}
.card .header {
  border-bottom: 1px solid #ccc;
  padding-bottom: 8px;
}
.card .header h4 {
  text-align: center;
  color: #f05f40;
}

.sub-title {
  padding: 8px 0;
}
.card .skills-content img {
  width: 80px;
  height: 80px;
  border-radius: 20px;
  margin: 0 8px;
}
</style>

