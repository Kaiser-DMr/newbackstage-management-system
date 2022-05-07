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
  </el-card>
</template>

<script>
import * as dayjs from "dayjs";
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
  margin-top: 10px;
  .sales-card-head {
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
}
</style>