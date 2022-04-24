<template>
  <div>
    <el-button type="primary" round @click="addpinpai">添加品牌</el-button>

    <el-table :data="trademarkList" border style="width: 100%;  margin: 10px 0">
      <el-table-column label="序号" type="index" width="80" align="center" />
      <el-table-column prop="tmName" label="品牌名称" align="center" />
      <el-table-column prop="logoUrl" label="品牌Log" align="center" style="width: 80px;">

        <template v-slot="{row}">
          <img :src="row.logoUrl" style="height:100%;width:150px" :alt="row.tmName">
        </template>
      </el-table-column>

      <el-table-column v-slot="{row}" label="操作">
        <el-button type="primary" icon="el-icon-edit" circle @click="editOneTrademark(row.id)" />
        <!-- <el-button type="primary" icon="el-icon-delete-solid">删除啊</el-button> -->
        <el-button type="danger" icon="el-icon-delete" circle @click="delOneTrademark(row.id)" />
      </el-table-column>
    </el-table>
    <!-- 分页器------------------- -->
    <el-pagination align="center" :current-page="currentPage" :pager-count="5" :page-sizes="[5, 10, 20, 50]" :page-size="limit" layout="total, prev, pager, next, sizes, jumper" :total="total" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
    <!-- 添加品牌 -->
    <el-dialog title="添加品牌" :visible.sync="xianshi" width="40%">
      <el-form ref="tmForm" :model="tmForm" :rules="rules">
        <el-form-item label="品牌名称" :label-width="formLabelWidth" prop="tmName">
          <el-input v-model="tmForm.tmName" autocomplete="off" />
        </el-form-item>
        <el-form-item label="品牌LOGO" :label-width="formLabelWidth">
          <el-upload class="avatar-uploader" action="/dev-api/admin/product/fileUpload" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon" />
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="xianshi = false">取 消</el-button>
        <el-button type="primary" @click="addOrUpdateOneTrademark">确 定</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
import { reqGetTrademarkList, reqSaveOneTrademark, reqGetOneTrademark, reqUpdateOneTrademark, reqDeleteOneTrademark } from '../../../api/product/trademark'

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
    // mounted() {
    //   this.reqGetTrademarkList()
    // },
    beforeAvatarUpload(file) {
      const imgArr = ['image/jpeg', 'image/jpg', 'image/png']
      const isJPG = imgArr.includes(file.type)
      const isLt3M = file.size / 1024 / 1024 < 3
      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG、PNG、JPEG 格式!')
      }
      if (!isLt3M) {
        this.$message.error('上传头像图片大小不能超过 3MB!')
      }
      return isJPG && isLt3M
    },
    handleAvatarSuccess(res, file) {
      console.log(res, file)
      this.imageUrl = URL.createObjectURL(file.raw)
      this.tmForm.logoUrl = res.data // 将上传图片成功后的图片链接地址存到这里面

      // this.$refs.tmForm.clearValidate(['logoUrl'])
    },
    addOrUpdateOneTrademark() {
      console.log(this.$refs['tmForm'])
      this.$refs['tmForm'].validate(async valid => {
        console.log('valid', valid)
        if (valid) {
          // alert('submit!')
          let result
          // 此时可以根据tmForm中是否有id来判断,当前操作是更新还是添加
          // 有id是说明是更新 ，反之则是添加新trademark
          if (this.tmForm.id) {
            result = await reqUpdateOneTrademark(this.tmForm)
            // 再加一条 清空this.tmForm
          } else {
            result = await reqSaveOneTrademark(this.tmForm)
          }
          if (result.code === 200) {
            this.xianshi = false
            // 提示一下
            this.$message.success('操作trademark成功...')
            // 刷新一下页面
            // this.currentPage = 1 // 查看第一页的数据
            this.getTrademarkList()
          } else {
            this.$message({
              type: 'error',
              message: '操作trademark失败...'
            })
          }
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    // 3. 删除
    delOneTrademark(id) {
      console.log('删除了')
      this.$confirm('您真的要删除此条数据吗?', '警告', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(async() => {
          const result = await reqDeleteOneTrademark(id)
          if (result.code === 200) {
            this.$message({
              type: 'success',
              message: '删除成功!'
            })
            // 判断一下，是不是删除的最后一页的最后一条，如果是的话，则要显示前一页的数据
            this.currentPage = this.trademarkList.length === 1 ? this.currentPage - 1 : this.currentPage
            // 刷新当前页面
            this.getTrademarkList()
          } else {
            this.$message({
              type: 'error',
              message: '删除失败!'
            })
          }
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
    },
    // 4. 更新tradrmark之数据回显
    async editOneTrademark(id) {
      const result = await reqGetOneTrademark(id)
      if (result.code === 200) {
        this.xianshi = true
        // console.log(result)
        this.tmForm = result.data
        // 渲染图片
        this.imageUrl = result.data.logoUrl
      }
    },
    addpinpai() {
      this.xianshi = true
      this.tmForm.tmName = ''
      this.imageUrl = ''
      // this.dialogFormVisible = true
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
