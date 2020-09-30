<template>
  <div class="tab-switch">
    <div class="tab-switch-item" v-for="(item,i) in tabList" :key="i" :class="{active:currentIndex == i}" @click="itemClick(i)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabSwitch',
  props: {
    tabList: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      currentIndex: 0
    }
  },
  methods: {
    itemClick (i) {
      this.currentIndex = i
    }
  },
}

</script>
<style>
.tab-switch {
  display: flex;
  text-align: center;
  height: 40px;
  line-height: 40px;
  font-size: 15px;
}
.tab-switch-item {
  flex: 1;
}
.tab-switch-item span {
  padding: 5px;
}
.active {
  color: var(--color-tint);
}
.active span {
  border-bottom: 3px solid var(--color-high-text);
}
</style>