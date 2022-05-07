<template>
  <div ref="Barchart" class="barchart"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "BarChart",
  mounted() {
    const barEcaharts = echarts.init(this.$refs.Barchart);
    barEcaharts.setOption({
      grid: {
        left: 0,
        right: 0,
      },
      xAxis: {
        show: false,
        data: [
          "一月",
          "二月",
          "三月",
          "四月",
          "五月",
          "六月",
          "七月",
          "八月",
          "九月",
          "十月",
          "十一月",
          "十二月",
        ],
      },
      yAxis: {
        show: false,
      },
      series: {
        type: "bar",
        data: [44, 126, 55, 88, 133, 99, 33, 113, 63, 98, 77, 123],
      },
    });
  },
};
</script>

<style>
.barchart {
  width: 100%;
  height: 100%;
}
</style>