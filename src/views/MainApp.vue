<template>
  <div class="home">
    <portfolio-header></portfolio-header>
    <v-card>
        테스ㅡㅌ
    </v-card>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import PortfolioHeader from "@/components/common/PortfolioHeader.vue";

@Component({
  components: { PortfolioHeader }
})
export default class MainApp extends Vue {
  private created() {
    //
  }
}
</script>
