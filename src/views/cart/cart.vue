<template>
  <div class="cart">
    购物车
    <button @click="addInfo">添加</button>
  </div>
</template>

<script>
export default {
  name: "cart",
  methods: {
    addInfo() {
      this.$router.replace("cartone");
    }
  }
};
</script>
<style></style>
