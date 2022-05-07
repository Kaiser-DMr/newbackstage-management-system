<template>
  <el-card class="sales-card">
    <div class="sales-card-head">
      <el-tabs v-model="activeName">
        <el-tab-pane label="销售额" name="first"> </el-tab-pane>
        <el-tab-pane label="访问量"> </el-tab-pane>
      </el-tabs>

      <div class="sales-card-date">
        <span @click="setToday">今日</span>
        <span @click="setWeek">本周</span>
        <span @click="setMonth">本月</span>
        <span @click="setY">今年</span>
        <el-date-picker
          v-model="date"
          type="daterange"
          range-separator="-"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          size="mini"
          style="width: 250px"
          format="yyyy-MM-dd"
          value-format="yyyy-MM-dd"
        ></el-date-picker>
      </div>
    </div>

    <div class="sales-card-body">
      <el-row :gutter="20">
        <el-col :lg="18" :md="18" :xs="24">
          <div ref="saleBarChart" class="sale-bar-chart"></div>
        </el-col>

        <!-- 右侧 -->
        <el-col :lg="6" :md="6" :xs="24"> <h4>门店销售额度排名</h4> </el-col>
        <ul>
          <li>
            <span class="sale-num">1</span>
            <span>肯德基</span>
            <span>323,234</span>
          </li>

          <li>
            <span class="sale-num">2</span>
            <span>麦当劳</span>
            <span>299,132</span>
          </li>
          <li>
            <span class="sale-num">3</span>
            <span>海底捞</span>
            <span>283,998</span>
          </li>
          <li>
            <span>4</span>
            <span>河底捞</span>
            <span>266,223</span>
          </li>
          <li>
            <span>5</span>
            <span>西贝筱面村</span>
            <span>223,445</span>
          </li>
          <li>
            <span>6</span>
            <span>汉堡王</span>
            <span>219,663</span>
          </li>
          <li>
            <span>7</span>
            <span>真功夫</span>
            <span>100,221</span>
          </li>
        </ul>
      </el-row>
    </div>
  </el-card>
</template>

<script>
import * as dayjs from "dayjs";
import * as echarts from "echarts";
export default {
  name: "Sales",
  methods: {
    setToday() {
      const today = dayjs().format("YYYY-MM-DD");
      console.log(today);
      this.date = [today, today];
    },

    // 设置周===============
    setWeek() {
      console.log("周------");
      const start = dayjs().startOf("week").add(1, "day").format("YYYY-MM-DD");
      const end = dayjs().endOf("week").add(1, "add").format("YYYY-MM-DD");
      this.date = [start, end];
    },
    setMonth() {
      const start = dayjs().startOf("month").format("YYYY-MM-DD");
      const end = dayjs().endOf("month").format("YYYY-MM-DD");
      this.date = [start, end];
    },
    setY() {
      const start = dayjs().startOf("year").format("YYYY-MM-DD");
      const end = dayjs().endOf("year").format("YYYY-MM-DD");
      this.date = [start, end];
    },
  },
  mounted() {
    const saleEcharts = echarts.init(this.$refs.saleBarChart);
    saleEcharts.setOption({
      title: {
        text: "销售额趋势",
        textStyle: {
          fontSize: "14px",
        },
        top: "20px",
      },

      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      xAxis: [
        {
          type: "category",
          data: [
            "1月",
            "2月",
            "3月",
            "4月",
            "5月",
            "6月",
            "7月",
            "8月",
            "9月",
            "10月",
            "11月",
            "12月",
          ],
          axisTick: {
            alignWithLabel: true,
          },
        },
      ],
      yAxis: [
        {
          type: "value",
        },
      ],
      series: [
        {
          name: "Direct",
          type: "bar",
          data: [52, 200, 334, 390, 330, 220, 330, 440, 520, 450, 470, 290],
          barWidth: 30,
        },
      ],
    });
  },
  data() {
    return {
      activeName: "first",
      date: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.sales-card {
  margin: 15px 0;
  .sales-card-head {
    margin-top: 5px;
    padding: 10px 20px 0;
    border-bottom: 2px solid #f0f0f0;
    display: flex;
    justify-content: space-between;
    align-content: center;
    .sales-card-date {
      span {
        margin-right: 20px;
        font-size: 14px;
        cursor: pointer;
      }
    }
  }

  .sales-card-body {
    .sale-bar-chart {
      width: 100%;
      height: 300px;
    }
    padding: 0 20px;
    ul {
      list-style: none;
      padding: 0 6px;
      li {
        // height: 36px;
        line-height: 35px;
        // line-height: 30px;
        span {
          margin: 0 20px;
          &:first-child {
            width: 20px;
            height: 20px;
            line-height: 22px;
            display: inline-block;
            margin-left: 0;
            text-align: center;
          }
          &.sale-num {
            background-color: rgb(16, 152, 59);
            border-radius: 50%;
            color: #fff;
          }
          &:last-child {
            float: right;
          }
        }
      }
    }
  }
}
</style>