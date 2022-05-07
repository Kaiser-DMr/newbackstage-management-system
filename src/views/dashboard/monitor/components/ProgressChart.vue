<template>
  <div class="prohs" ref="progresschart"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "Progresschart",
  mounted() {
    var md = echarts.init(this.$refs.progresschart);
    md.setOption({
      grid: {
        left: 0,
        right: 0,
      },
      xAxis: {
        min: 0,
        max: 100,
        show: false,
      },
      yAxis: {
        show: false,
        type: "category",
        data: ["数据"],
      },
      series: {
        type: "bar",
        data: [78],
        // 柱条的宽度
        barWidth: 10,
        // 柱条的背景色
        showBackground: true,
        itemStyle: {
          color: "pink",
        },
        // 显示出对应的文字
        label: {
          show: true,
          formatter: "|", // 相当于是过滤器或是计算属性
          color: "pink",
          position: "right",
        },
      },
    });
  },
};
</script>

<style lang="scss" scoped>
.prohs {
  width: 100%;
  height: 100%;
}
</style>