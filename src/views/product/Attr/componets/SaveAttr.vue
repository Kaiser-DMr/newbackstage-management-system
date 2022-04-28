<template>
  <div>
    <el-form ref="attrForm" :model="attr" :rules="rules">
      <el-form-item label="属性名" label-width="70px" prop="attrName">
        <el-input v-model="attr.attrName" placeholder="请输入属性名" style="width:400px" />
      </el-form-item>
      <el-form-item label="">
        <el-button type="primary" icon="el-icon-plus" :disabled="!attr.attrName" @click="addAttrValue">添加属性值</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="attr.attrValueList" border style="margin-bottom:20px">
      <el-table-column label="序号" width="80px" type="index" align="center" />
      <el-table-column label="属性值名称">
        <template v-slot="{row,$index}">
          <el-input :ref="$index" v-model="row.valueName" placeholder="请输入详细属性值" size="mini" @blur="isDelCurrentValue(row,$index)" />
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template v-slot="{row,$index}">
          <el-popconfirm confirm-button-text="确定" cancel-button-text="取消" icon="el-icon-info" icon-color="red" title="您真的要删除此项属性值吗？" @onConfirm="deleteCurrentAttrValue(row,$index)">
            <el-tooltip slot="reference" content="删除属性值" placement="top">
              <el-button type="danger" icon="el-icon-delete" size="mini" />
            </el-tooltip>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>

    <el-button type="primary" @click="submitForm">确定</el-button>
    <el-button @click="$emit('setIsShowAttrList', true)">取消</el-button>
  </div>
</template>

<script>
import { reqSaveOrUpdateAttrInfo } from '@/api/product/attr'
import { mapState } from 'vuex'
export default {
  name: 'SaveAttr',
  props: {
    attrValue: {
      type: Object,
      default: () => ({
        attrName: '',
        attrValueList: []
      })
    }
  },
  data() {
    return {
      attr: this.attrValue,
      rules: {
        attrName: [{ required: true, message: '请输入属性名称', trigger: 'blur' }]
      }
    }
  },
  computed: {
    ...mapState('category', ['category3Id'])
  },
  methods: {

    addAttrValue() {
      this.attr.attrValueList.push({
        valueName: ''
      })
      this.$nextTick(() => {
        this.$refs[this.attr.attrValueList.length - 1].focus()
      })
    },

    isDelCurrentValue(row, index) {
      if (!row.valueName) {
        this.attr.attrValueList.pop()
      }
    },
    // 3. 添加属性
    submitForm() {
      this.$refs.attrForm.validate(async valid => {
        if (valid) {
          if (!this.attr.attrValueList.length) {
            this.$message.error('请至少添加一个属性值...')
            return
          }
          const { attrName, attrValueList, id } = this.attr
          const { category3Id } = this
          const result = await reqSaveOrUpdateAttrInfo({
            attrName,
            attrValueList,
            categoryId: category3Id,
            categoryLevel: 3,
            id
          })
          if (result.code === 200) {
            this.$message({
              type: 'success',
              message: `${id ? '修改' : '添加'}属性成功`
            })
            this.$emit('setIsShowAttrList', true)
            console.log('跳转刷新')
          } else {
            this.$message.error('添加属性失败...')
          }
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    //  删除当前属性值
    deleteCurrentAttrValue(row, index) {
      this.attr.attrValueList.splice(index, 1)
      console.log('删除')
    }

  }

}
</script>

<style>
</style>
