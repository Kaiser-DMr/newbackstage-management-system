<template>
  <div ref="lineChart" class="lineChart"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "LineChart",
  mounted() {
    const myChart = echarts.init(this.$refs.lineChart);
    myChart.setOption({
      grid: {
        left: -10,
        right: -10,
        top: 0,
        bootom: 0,
      },
      xAxis: {
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
        type: "line",
        data: [44, 126, 55, 88, 133, 99, 33, 113, 63, 98, 77, 12],
      },
      itemStyle: {
        opacity: 0,
      },
      smooth: true,
      areaStyle: {
        color: {
          type: "linear",
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: "#a06ee5",
            },
            {
              offset: 1,
              color: "#fff",
            },
          ],
          global: false,
        },
      },
      lineStyle: {
        color: "#a06ee5",
      },
    });
    console.log(this.$refs.lineChart);
  },
};
</script>

<style lang="scss" scoped>
.lineChart {
  width: 100%;
  height: 100%;
}
</style>