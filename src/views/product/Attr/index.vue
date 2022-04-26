<template>

  <el-card>
    <CategorySelector />
    <AttrList />
  </el-card>
</template>

<script>
import AttrList from './componets/AttrList.vue'

export default {
  name: 'Attr',
  components: {
    AttrList
  }
}
</script>

<style lang='scss' scoped>

</style>
