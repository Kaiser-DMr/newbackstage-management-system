<template>
  <div class="monitor">
    <el-col :xs="24" :sm="12" :lg="6">
      <Card title="销售总额" value="$ 126506">
        <span></span>
        <template>
          <span>
            周同比 56.66%
            <i class="el-icon-caret-top el-red"></i>
            日同比 20.16%
            <i class="el-icon-caret-bottom el-green"></i>
          </span>
        </template>

        <template #footer>
          <span> 日销售总额￥ 12344 </span>
        </template>
      </Card>
    </el-col>

    <el-col :xs="24" :sm="12" :lg="6">
      <Card title="访问量" value="88460">
        <template>
          <LineChart />
        </template>
        <template #footer>
          <span>日访问量 1234</span>
        </template>
      </Card>
    </el-col>

    <el-col :xs="24" :sm="12" :lg="6">
      <Card title="支付笔数" value="128460">
        <template>
          <BarChart></BarChart>
        </template>
        <template #footer>
          <span>转化率 65%</span>
        </template>
      </Card>
    </el-col>

    <el-col :xs="24" :sm="12" :lg="6">
      <Card title="运营活动效果" value="78%">
        <template>
          <Progresschart />
        </template>
        <template #footer>
          <span
            >周同比12%
            <i class="el-icon-caret-top el-red"></i>
            日同比 11%
            <i class="el-icon-caret-bottom el-green"></i>
          </span>
        </template>
      </Card>
    </el-col>
  </div>
</template>

<script>
import Card from "./components/card.vue";
import LineChart from "./components/LineChart.vue";
import BarChart from "./components/Barchat.vue";
import Progresschart from "./components/ProgressChart.vue";
export default {
  name: "Montior",
  components: {
    Card,
    LineChart,
    BarChart,
    Progresschart,
  },
};
</script>

<style lang="scss" scoped>
.el-red {
  color: red;
}
.el-green {
  color: rgb(4, 255, 4);
}
</style>