<template>
  <div class="card">
    <div class="card-header">
      <span> {{ title }} </span>

      <i class="el-icon-info" />
    </div>

    <div class="card-body">
      <div class="card-body-value">{{ value }}</div>
      <div class="card-body-item">
        <slot></slot>
      </div>
    </div>

    <div class="card-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    title: {
      type: String,
      default: "",
    },
    value: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  // color: #303133;
  background-color: #fff;
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  padding: 20px;
  margin: 5px;

  .card-header {
    color: #ccc;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
  }
}

.card-body {
  padding: 0 10px 0 5px 0;
  margin-bottom: 5px;
  border-bottom: 1px solid #f0f0f0;
  .card-body-value {
    margin-top: 10px;
    font-size: 30px;
    color: rgba(0, 0, 0, 0.8);
  }
  .card-body-item {
    height: 45px;
    font-size: 14px;
    margin-bottom: 15px;
    display: flex;
    align-items: flex-end;
  }
}
.card-footer {
  padding-top: 7px;
  font-size: 15px;
}
</style>
