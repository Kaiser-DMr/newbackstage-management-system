<template>
  <div ref="SeachChart" class="SeachChart"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "SeachChart",
  mounted() {
    // 在此初始化，及设置参数
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(this.$refs.SeachChart);
    myChart.setOption({
      grid: {
        left: -10,
        right: -10,
        top: 0,
        bottom: 0,
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
        // 设置图形的样式 如果只有一个图形 可以直接使用对象
        type: "line",
        data: [44, 126, 55, 88, 133, 99, 33, 113, 63, 98, 77, 123],
        // 去掉拐点线
        itemStyle: {
          opacity: 0,
        },
        // 设置成平滑曲线
        smooth: true,
        areaStyle: {
          color: {
            // 线性渐变
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "blue", // 0% 处的颜色
              },
              {
                offset: 1,
                color: "#fff", // 100% 处的颜色
              },
            ],
            global: false, // 缺省为 false
          },
        },
        // 设置折线的颜色
        lineStyle: {
          color: "blue",
        },
      },
    });
  },
};
</script>

<style lang="scss" scoped>
.SeachChart {
  width: 100%;
  // height: 100%;
  height: 60px;
}
</style>