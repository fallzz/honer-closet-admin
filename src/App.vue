<template>
  <div id="app" class="wrapper">
    <menu-header></menu-header>
    <div class="inner-wrapper">
      <sidebar></sidebar>
      <toggle-menu></toggle-menu>
      <contents-board></contents-board>
    </div>
  </div>
</template>

<script>
import MenuHeader from './components/MenuHeader'
import Sidebar from './components/Sidebar'
import ToggleMenu from './components/ToggleMenu'
import ContentsBoard from './components/ContentsBoard'

export default {
  components: {
    MenuHeader,
    Sidebar,
    ToggleMenu,
    ContentsBoard
  }
}

</script>

<style scoped>
.wrapper {
  font-family: sans-serif;
  background-color: white;
  text-align: center;
}

.inner-wrapper {
  display: flex;
  height: 100%;
}

.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03)
}
</style>
