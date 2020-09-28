<template>
  <div class="tab-bar-item" @click="itemClick()">
    <!-- <img src="../../assets/img/tabbar/home.svg" alt="">
    <div>首页</div> -->
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div  class="item-text" :style="textActiveColor" >
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props: {
    path: {
      type: String
    },
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  computed: {
    isActive () {
      return this.$route.path.indexOf(this.path) !== -1
    },
    textActiveColor () {
      return this.isActive ? { color: this.activeColor } : {}
    }
  },
  data () {
    return {
      // isActive: true
    }
  },
  methods: {
    itemClick () {
      this.$router.push(this.path)
    }
  }
}

</script>
<style>
.tab-bar-item {
  flex: 1;
  height: 49px;
  text-align: center;
  box-shadow: 0 -2px 1px rgba(100, 200, 100, 0.1);
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  vertical-align: middle;
  margin-top: 3px;
  margin-bottom: 2px;
}
.item-text {
  margin-bottom: 5px;
}
/* .tab-bar-item .active {
  color: red;
} */
</style>