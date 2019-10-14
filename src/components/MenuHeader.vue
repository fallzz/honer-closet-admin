<template>
  <section id="menu-header-bar">
    <aside id="toggle-button-container">
        <i class="fas fa-bars" id="sidebar-toggle-button" v-on:click="toggleButtonClick"></i>
    </aside>
    <div id="home-button-container">
      <router-link to="/" class="link"><div id="home-button"  v-on:click="clickHomeButton">Administrator</div></router-link>
    </div>
  </section>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  methods: {
    ...mapMutations({
      toggleButtonClick: 'toggleButtonClick',
      clickHomeButton: 'clickHomeButton'
    }),
  }
}
</script>

<style scoped>
#menu-header-bar {
  height: 37px;
  background-color: #3F51B5;
  width: 100%;
}

#toggle-button-container {
  float:left;
}

#home-button-container {
  background-color: #2F409F;
  padding: 0.47rem;
  position: relative;
  float:left;
  width: 175px;
}

#home-button {
  color: #ffffff;
}

#home-button:hover {
  cursor: pointer;
  text-decoration: underline;
}

#sidebar-toggle-button {
  background-color: #223390;
  position: relative;
  width: 30px;
  color: white;
  padding: 10px;
  cursor: pointer;
}

#sidebar-toggle-button:hover {
  color: gray;
}

/*리스트 아이템 트랜지션*/
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>