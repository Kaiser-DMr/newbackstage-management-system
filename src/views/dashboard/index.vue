<template>
  <div class="dashboard-container">
    <!-- <div class="dashboard-text"></div> -->
    <Montior></Montior>
    <Sales> </Sales>
    <Seare></Seare>
  </div>
</template>

<script>
import Montior from "./monitor/index.vue";
import Sales from "./sales/index.vue";
import Seare from "./Search/index.vue";
export default {
  name: "Dashboard",
  components: {
    Montior,
    Sales,
    Seare,
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
// .dashboard {
//   &-container {
//     margin: 30px;
//   }
//   &-text {
//     font-size: 30px;
//     line-height: 46px;
//   }
// }
</style>
