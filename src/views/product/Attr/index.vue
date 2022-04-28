<template>

  <el-card>
    <CategorySelector :disabled="issShowAttrList" />
    <AttrList v-if="issShowAttrList" @setIsShowAttrList="setIsShowAttrList" @setAttr="attrValue=$event" />
    <SaveAttr v-else :attr-v="attrValue" @setIsShowAttrList="setIsShowAttrList" />
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
      attrValue: ''
    }
  },
  methods: {
    setIsShowAttrList(a) {
      console.log('添加属性')
      this.issShowAttrList = a
      console.log(this.issShowAttrList, '值')
    }
  }

}
</script>

<style lang='scss' scoped>

</style>
