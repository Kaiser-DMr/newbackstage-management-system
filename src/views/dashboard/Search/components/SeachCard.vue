<template>
  <div class="search-card">
    <div class="search-card-header">
      <span>{{ title }} </span>
      <i class="el-icon-info"></i>
    </div>

    <div class="search-body">
      <div class="search-card-body-value">
        <span>{{ value1 }}</span>
        <span> {{ value2 }}</span>
        <slot></slot>
      </div>

      <div>
        <slot name="searchFooter"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchCard",
  props: {
    title: {
      type: String,
      default: "",
    },
    value1: {
      type: String,
      default: "",
    },
    value2: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.search-card {
  padding: 20px 0px;
  .search-card-header {
    color: rgb(210, 14, 14);
    span {
      margin-right: 30px;
    }
  }
  .search-body {
    .search-card-body-value {
      // padding:10px 0 0 0;
      padding-top: 20px;
      span {
        &:first-child {
          font-size: 26px;
          margin-right: 40px;
        }
      }
    }
  }
}
</style>