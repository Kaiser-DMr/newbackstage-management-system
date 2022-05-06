<template>
  <div class="dashboard-container">
    <!-- <div class="dashboard-text"></div> -->
    <Montior></Montior>
  </div>
</template>

<script>
import Montior from "./monitor/index.vue";
export default {
  name: "Dashboard",
  components: {
    Montior,
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
