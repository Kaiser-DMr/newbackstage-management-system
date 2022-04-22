<template>
  <div>
    <el-button type="primary" round>添加品牌</el-button>

    <el-table :data="trademarkList" border style="width: 100%; margin: 10px 0">
      <el-table-column label="序号" type="index" width="80" align="center">
      </el-table-column>
      <el-table-column prop="tmName" label="品牌名称" align="center">
      </el-table-column>
      <el-table-column prop="address" label="品牌Log" align="center" style="width: 80px;">

               <template v-slot="{row}">
          <img :src="row.logoUrl" style="height:120px;width:150px" :alt="row.tmName">
        </template>  
      </el-table-column>

      <el-table-column label="操作">
        <el-button type="primary" icon="el-icon-edit" circle></el-button>
        <!-- <el-button type="primary" icon="el-icon-delete-solid">删除啊</el-button> -->
        <el-button type="danger" icon="el-icon-delete" circle></el-button>
      </el-table-column>
    </el-table>
    <!-- 分页器------------------- -->
    <el-pagination
      align="center"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :pager-count="5"
      :page-sizes="[5, 10, 20, 50]"
      :page-size="5"
      layout="total, prev, pager, next, sizes, jumper"
      :total="400"
    >
    </el-pagination>
  </div>
</template>

<script>
import { reqGetTrademarkList } from "../../../api/product/trademark";

export default {
  name: "Trademark",

  data() {
    return {
      currentPage4: 1,
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-07",
          name: "王小虎7",
          address: "上海市普陀区金沙江路 1518 弄",
        },
      ],
      page: 1,
      limit: 5,
      trademarkList: [],
    };
  },
  async mounted() {
    // const result = await reqGetTrademarkList(1, 5);
    // console.log(result);
    this.getTrademarkList();
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    // this.getTrademarkList(),
    mounted() {
      this.reqGetTrademarkList();
    },

    async getTrademarkList() {
      const { page, limit } = this;
      const result = await reqGetTrademarkList(page, limit);
      if (result.code === 200) {
        this.total = result.data.total;
        this.trademarkList = result.data.records;
        console.log(this.trademarkList);
      } else {
        this.$message("获取数据列表失败...");
      }
    },
  },
};
</script>

<style lang='scss' scoped>
</style>