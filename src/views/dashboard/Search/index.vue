<template>
  <el-row :gutter="10" class="search">
    <el-col :md="12" :lg="12" :sm="24" :xs="24">
      <el-card>
        <div class="search-left-head">
          <h4>线上热门搜索</h4>
          <!-- <i class="el-icon-more"></i> -->
          <el-dropdown>
            <span class="el-dropdown-link">
              <i class="el-icon-more" />
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>黄金糕</el-dropdown-item>
              <el-dropdown-item>狮子头</el-dropdown-item>
              <el-dropdown-item disabled>螺蛳粉</el-dropdown-item>
              <el-dropdown-item disabled>双皮奶</el-dropdown-item>
              <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class="search-left-body">
          <el-col :lg="12" :md="12" :sm="24">
            <SearchCard title="搜索用户数" value1="123456" value2="18.2">
              <template>
                <i class="el-icon-caret-top el-red" />
              </template>
              <template #searchFooter>
                <SearchChart />
              </template>
            </SearchCard>
          </el-col>
          <el-col :lg="12" :md="12" :sm="24">
            <SearchCard title="人均搜索次数" value1="2.7" value2="26.2">
              <template>
                <i class="el-icon-caret-bottom el-cyan" />
              </template>
              <template #searchFooter>
                <SearchChart />
              </template>
            </SearchCard>
          </el-col>
          <el-table border>
            <el-table-column label="排名" width="80" />
            <el-table-column label="搜索关键词" />
            <el-table-column label="用户数" sortable />
            <el-table-column label="周涨幅" sortable />
          </el-table>
          <el-pagination
            layout="prev, pager, next"
            style="margin: 0 100px"
            :total="1000"
          />
        </div>
      </el-card>
    </el-col>

    <el-col :md="12" :lg="12" :sm="24" :xs="24">
      <el-card>
        <div class="search-right-header">
          <h4>销售额类别占比</h4>
          <el-radio-group v-model="radio1" size="small">
            <el-radio-button label="全部渠道" />
            <el-radio-button label="线上" />
            <el-radio-button label="门店" />
          </el-radio-group>
        </div>
        <div class="search-right-body">
          <PieChart />
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import { defaults } from "js-cookie";
import SearchCard from "./components/SeachCard.vue";
import SearchChart from "./components/SeachChart.vue";
import PieChart from "./components/PieChart.vue";
export default {
  name: "seare",
  components: { SearchCard, SearchChart, PieChart },
  data() {
    return {
      radio1: "全部渠道",
    };
  },
};
</script>

<style lang="scss" scoped>
.search-left-head {
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
  margin-bottom: -4px;
  h4 {
    margin: 15px 0;
  }
}
.search-right-header {
  h4 {
    margin: 15px 0;
  }
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgb(101, 100, 100);
}
.search-left-body {
  padding: 0 10px;
}
.search-right-body {
  padding-top: 5px;
}
.el-red {
  color: red;
}
.el-cyan {
  color: cyan;
}
</style>