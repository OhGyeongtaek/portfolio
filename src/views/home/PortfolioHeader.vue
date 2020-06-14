<template>
  <header>
    <h1><a href="#">OGT PORTFOLIO</a></h1>
    <nav>
      <ul class="nav">
        <li class="nav-item" >
          <a href="#" v-on:click.prevent="() => nav(1)">HOME</a>
        </li>
        <li class="nav-item">
          <a href="#" v-on:click.prevent="() => nav(2)">SKILLS</a>
        </li>
        <li class="nav-item">
          <a href="#" v-on:click.prevent="() => nav(3)">PORTFOLIO</a>
        </li>
        <li class="nav-item">
          <a href="#" v-on:click.prevent="() => nav(4)">CONTACT AS</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { Vue, Component, Emit } from "vue-property-decorator";

@Component
export default class PortfolioHeader extends Vue {

  @Emit()
  private nav(page: number) {
    return page;
  }
}
</script>

<style>
a,
a:hover {
  text-decoration: none;
}
h1,
h1 a {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.7);
}
h1 a:hover,
header > nav > span > a:hover {
  color: #fff;
}
header {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.7);
  padding: 8px 20px;
  z-index: 100;
}
header nav .nav {
  width: 350px;
  justify-content: space-between;
}
header nav .nav > li > a {
  font-size: 0.85rem;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.7);
}
@media (max-width: 500px) {
  header {
    width: 100vw;
    display: block;
    background: #fff;
    text-align: center;
    position: fixed;
  }
  header > nav > .nav {
    width: 95vw;
    color: #f05f40;
  }
  header > h1 > a {
    color: #f05f40;
  }
  header > nav {
    display: block;
  }
  header > nav > .nav > li > a {
    color: #333;
  }
  h1 a:hover{
    color: #f05f40;
  }
  header > nav > .nav > li > a:hover {
    color: #333;
  }
}
</style>
