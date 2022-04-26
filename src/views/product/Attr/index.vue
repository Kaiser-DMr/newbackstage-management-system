<template>

  <el-card>
    <CategorySelector />
    <AttrList v-if="issShowAttrList" @setIsShowAttrList="isShowAttrList=$event" @setAttr="getAttrValue" />
    <SaveAttr v-else :attr-value="attrValue" @setIsShowAttrList="isShowAttrList=$event" />
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
      issShowAttrList: true,
      attrValue: {}
    }
  },
  methods: {
    setIsShowAttrList(flag) {
      this.isShowAttrList = flag
    },
    getAttrValue(obj) {
      this.attrValue = obj
    }

  }
}
</script>

<style lang='scss' scoped>

</style>
