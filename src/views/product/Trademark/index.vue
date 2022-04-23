<template>
  <div>
    <el-button type="primary" round @click="xianshi=true">添加品牌</el-button>

    <el-table :data="trademarkList" border style="width: 100%;  margin: 10px 0">
      <el-table-column label="序号" type="index" width="80" align="center" />
      <el-table-column prop="tmName" label="品牌名称" align="center" />
      <el-table-column prop="logoUrl" label="品牌Log" align="center" style="width: 80px;">

        <template v-slot="{row}">
          <img :src="row.logoUrl" style="height:100%;width:150px" :alt="row.tmName">
        </template>
      </el-table-column>

      <el-table-column label="操作">
        <el-button type="primary" icon="el-icon-edit" circle />
        <!-- <el-button type="primary" icon="el-icon-delete-solid">删除啊</el-button> -->
        <el-button type="danger" icon="el-icon-delete" circle />
      </el-table-column>
    </el-table>
    <!-- 分页器------------------- -->
    <el-pagination
      align="center"
      :current-page="currentPage"
      :pager-count="5"
      :page-sizes="[5, 10, 20, 50]"
      :page-size="limit"
      layout="total, prev, pager, next, sizes, jumper"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
    <!-- 添加品牌 -->
    <el-dialog title="添加品牌" :visible.sync="xianshi" width="40%">
      <el-form>
        <el-form-item label="品牌名称" :label-width="formLabelWidth" prop="tmName">
          <el-input autocomplete="off" />
        </el-form-item>
        <el-form-item label="品牌LOGO" :label-width="formLabelWidth">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon" />
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="xianshi = false">取 消</el-button>
        <el-button
          type="primary"
          @click="xianshi = false"
        >确 定</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
import { reqGetTrademarkList } from '../../../api/product/trademark'

export default {
  name: 'Trademark',

  data() {
    return {
      currentPage: 1,
      // tableData: [
      //   {
      //     date: '2016-05-03',
      //     name: '王小虎',
      //     address: '上海市普陀区金沙江路 1518 弄'
      //   },
      //   {
      //     date: '2016-05-02',
      //     name: '王小虎',
      //     address: '上海市普陀区金沙江路 1518 弄'
      //   },
      //   {
      //     date: '2016-05-04',
      //     name: '王小虎',
      //     address: '上海市普陀区金沙江路 1518 弄'
      //   },
      //   {
      //     date: '2016-05-01',
      //     name: '王小虎',
      //     address: '上海市普陀区金沙江路 1518 弄'
      //   },
      //   {
      //     date: '2016-05-08',
      //     name: '王小虎',
      //     address: '上海市普陀区金沙江路 1518 弄'
      //   },
      //   {
      //     date: '2016-05-06',
      //     name: '王小虎',
      //     address: '上海市普陀区金沙江路 1518 弄'
      //   },
      //   {
      //     date: '2016-05-07',
      //     name: '王小虎7',
      //     address: '上海市普陀区金沙江路 1518 弄'
      //   }
      // ],
      page: 1,
      limit: 5,
      trademarkList: [],
      total: 0,
      xianshi: false,
      formLabelWidth: '120px',
      imageUrl: '',
      tmName: '',
      tmForm: {
        // 品牌名称
        tmName: '',
        // 图片链接
        logoUrl: ''
      },
      rules: {
        tmName: [
          { required: true, message: '请输入品牌名称', trigger: 'blur' },
          { min: 2, max: 6, message: '长度在 2 到 6 个字符', trigger: 'blur' }
        ],
        logoUrl: [{ required: true, message: '请选择一张品牌图片', trigger: 'change' }]
      }

    }
  },
  async mounted() {
    this.getTrademarkList()
  },
  methods: {
    async getTrademarkList() {
      const { currentPage: page, limit } = this

      const result = await reqGetTrademarkList(page, limit)
      if (result.code === 200) {
        this.total = result.data.total
        this.trademarkList = result.data.records
        console.log(this.trademarkList)
      } else {
        this.$message('获取数据列表失败...')
      }
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
      this.limit = val
      this.currentPage = 1
      this.getTrademarkList()
    },
    handleCurrentChange(val) {
      this.currentPage = val
      this.getTrademarkList(val)
      console.log(`当前页: ${val}`)
    },
    // this.getTrademarkList(),
    mounted() {
      this.reqGetTrademarkList()
    },
    addpinpai() {

    }

  }
}
</script>

<style lang='scss' scoped>
</style>
