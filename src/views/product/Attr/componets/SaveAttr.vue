<template>
  <el-card>
    <el-form ref="form" :model="attr" :rules="rules">
      <el-form-item label="属性名" prop="attrName">
        <el-input v-model="attr.attrName" style="width: 220px" />
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          icon="el-icon-plus"
          :disabled="!attr.attrName"
          @click="addAttrValue"
        >添加属性值</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="attr.attrValueList" border>
      <el-table-column type="index" label="序号" align="center" width="80" />
      <el-table-column prop="attrName" label="属性名称">
        <template v-slot="{ row,$index }">
          <el-input
            :ref="$index"
            placeholder="请输入属性名称"
            size="mini"
          />
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template v-slot="{}">
          <el-button type="warning" size="mini" icon="el-icon-edit" />
          <el-button
            type="danger"
            size="mini"
            icon="el-icon-delete"
          />
        </template>
      </el-table-column>
    </el-table>
    <el-button type="primary">确定</el-button>
    <el-button type="default" @click="$emit('setIsShowAttrList',true)">取消</el-button>
  </el-card>
</template>

<script>
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
      // attrValueList: [],
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
  methods: {
    addAttrValue() {
      this.attr.attrValueList.push({
        valueName: ''
      })
      this.$nextTick(() => {
        this.$refs[this.attr.attrValueList.length - 1].focus()
      })
    }
  }
}
</script>

<style>
</style>
