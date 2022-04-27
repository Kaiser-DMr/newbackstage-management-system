<template>

  <el-card>
    <CategorySelector />
    <AttrList v-if="issShowAttrList" @setIsShowAttrList="setIsShowAttrList" />
    <SaveAttr v-else @setIsShowAttrList="setIsShowAttrList" />
  </el-card>
</template>

<script>
import AttrList from './componets/AttrList.vue'
import SaveAttr from './componets/SaveAttr.vue'
export default {
  name: 'Attr',
  components: {
    AttrList,
    SaveAttr
  },
  data() {
    return {
      issShowAttrList: true
      // attrValue: {}
    }
  },
  methods: {
    setIsShowAttrList(a) {
      console.log('添加属性')
      this.issShowAttrList = a
      console.log(this.issShowAttrList)
    }
  }

}
</script>

<style lang='scss' scoped>

</style>
