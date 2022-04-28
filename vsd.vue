<template>
  <el-card>
    <el-form ref="form" :model="attr" :rules="rules">
      <el-form-item label="属性名" prop="attrName">
        <el-input v-model="attr.attrName" style="width: 220px" />
      </el-form-item>
      <el-form-item label="">
        <el-button
          type="primary"
          icon="el-icon-plus"
          :disabled="!attr.attrName"
          @click="addAttrValue"
        >添加属性值</el-button>
      </el-form-item>
      <el-form-item prop="attrValueList">
        <el-table :data="attr.attrValueList" border style="margin-bottom:20px">
          <el-table-column type="index" label="序号" align="center" width="80" />
          <el-table-column prop="attrName" label="属性名称">

            <template v-slot="{ row,$index }">
              <el-input
                :ref="$index"
                v-model="row.valueName"
                placeholder="请输入属性名称"
                size="mini"
                @blur="isDeleteCurrentInput(row,$index)"
              />
            </template>
          </el-table-column>

          <el-table-column label="操作">

            <template v-slot="{}">
              <el-tooltip
                class="item"
                effect="dark"
                content="编辑属性"
                placement="top-start"
              >
                <el-button type="warning" size="mini" icon="el-icon-edit" @click="editValue(row) " />
              </el-tooltip>
              <el-tooltip
                class="item"
                effect="dark"
                content="删除属性"
                placement="top-start"
              >
                <el-button
                  type="danger"
                  size="mini"
                  icon="el-icon-delete"
                  @click="edit-value-(row) "
                />
              </el-tooltip>
            </template>
          </el-table-column>
        </el-table>
      </el-form-item>
    </el-form>
    <el-button type="primary" @click="submitForm">确定</el-button>
    <el-button type="default" @click="$emit('setIsShowAttrList',true)">取消</el-button>
  </el-card>
</template>

<script>
import { reqSaveAttrInfo } from '@/api/product/attr'
import { mapState } from 'vuex'
export default {
  name: 'SaveAttr',
  data() {
    const validatorAttrList = (rule, value, callback) => {
      if (!value.length) {
        return callback('请至少添加一项属性值')
      }
      if (!value[value.length - 1].valueName) {
        this.$refs[value.length - 1].focus()
        return callback('请添加属性值')
      }
      callback()
    }
    return {

      attr: {
        tmName: '',
        attrValueList: []
      },
      rules: {
        attrName: [
          { required: true, message: '属性名不能为空', trigger: 'blur' }
        ],
        attrValueList: [{ required: true, validator: validatorAttrList }]
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
    submitForm() {
      this.$refs.form.validate(async valid => {
        if (valid) {
          const { attrName, attrValueList } = this.attr
          const { category3Id } = this
          const result = await reqSaveAttrInfo({
            attrName,
            attrValueList,
            categoryId: category3Id,
            categoryLevel: 3
          })
          if (result.code === 200) {
            this.$message({
              type: 'success',
              message: '添加属性成功'
            })
            console.log('添加成功')
            this.$emit('setIsShowAttrList', true)
          }
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },

    // submitForm() {
    //   this.$refs.attrForm.validate(valid => {
    //     if (valid) {
    //       alert('submit!')
    //     } else {
    //       console.log('error submit!!')
    //       return false
    //     }
    //   })
    // },

    isDeleteCurrentInput(row, index) {
      if (!row.valueName) return this.attr.attrValueList.splice(index, 1)
    },
    editValue(row) {
      this.$emit('setAttr', row)
      this.$emit('setIsShowAttrList', false)
      console.log('编辑===')
    }
  }
}
</script>

<style>
</style>
