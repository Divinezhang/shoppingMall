
<template>
  <div class="tab-bar">
    <!-- <tab-bar-item></tab-bar-item>
    <tab-bar-item></tab-bar-item>
    <tab-bar-item></tab-bar-item>
    <tab-bar-item></tab-bar-item> -->
    <slot></slot>
  </div>
</template>

<script>
// import TabBarItem from './TabBar-item'
export default {
  name: 'TabBar',
  components: {
    // TabBarItem
  }
}
</script>
<style>
.tab-bar {
  display: flex;
  background: #f6f6f6;
  position: fixed;
  bottom: 5px;
  left: 0;
  right: 0;
}
</style>