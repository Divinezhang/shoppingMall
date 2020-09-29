<template>
  <div class="home">
    <nav-bar class="nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/NavBar'
export default {
  name: 'Home',
  components: {
    NavBar
  }
}

</script>
<style scoped>
.nav-bar {
  background: var(--color-tint);
  color: #ffffff;
  font-weight: 600;
}
</style>