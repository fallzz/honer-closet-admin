<template>
  <transition name="slide-fade">
    <div class="sidebar-contents-container" v-if="this.toggleMenuIsOn">
      <div class="menu-title"> {{ this.selectedMenuTitle }} </div>
      <div>
        <li class="menu-content" v-for="submenu in this.getSubmenus" v-bind:key="submenu.index">
          <router-link :to="submenu.route" class="submenu">{{ submenu.title }}</router-link>
        </li>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['selectedMenuTitle']),
    ...mapGetters(['getSubmenus']),
    ...mapGetters(['toggleMenuIsOn']),
  }
}
</script>

<style scoped>
.sidebar-contents-container {
  margin: 0;
  width: 221px;
  height: auto;
  background-color: #ffffff;
  border-right: 2px solid #E1E1E1;
}
.menu-title {
  font-weight: 800;
  margin-top: 5px;
  padding: 5px;
}
.menu-content {
  list-style: none;
  padding: 5px;
}

.submenu {
  text-decoration: none;
  color:black;
}

.router-link-exact-active {
  text-decoration-line: underline;
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .2s ease;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(-17px);
  opacity: 0.5;
}
</style>