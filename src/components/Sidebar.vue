<template>
  <aside id="sidebar-menu-container">
    <i class="fas fa-cog menu-button-icon" v-bind:class="{'menu-button-selected': this.selectedMenuNumber==0}" v-on:click="clickMenuButtonIcon(0)"></i>
    <i class="far fa-user menu-button-icon" v-bind:class="{'menu-button-selected': this.selectedMenuNumber==1}" v-on:click="clickMenuButtonIcon(1)"></i>
    <i class="fas fa-list-ul menu-button-icon" v-bind:class="{'menu-button-selected': this.selectedMenuNumber==2}" v-on:click="clickMenuButtonIcon(2)"></i>
    <i class="far fa-envelope menu-button-icon" v-bind:class="{'menu-button-selected': this.selectedMenuNumber==3}" v-on:click="clickMenuButtonIcon(3)"></i>
    <i class="fas fa-won-sign menu-button-icon" v-bind:class="{'menu-button-selected': this.selectedMenuNumber==4}" v-on:click="clickMenuButtonIcon(4)"></i>
  </aside>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations({
      clickMenuButtonIcon: 'clickMenuButtonIcon'
    })
  },
  computed: {
    ...mapGetters(['selectedMenuNumber'])
  }
}
</script>

<style scoped>

#sidebar-menu-container {
  width: 50px;
  height: 100%px;
  background-color: #f5f5f5;
}

.menu-button-icon {
  width: 27px;
  color: rgb(180, 180, 180);
  padding: 10px;
  border: 1px solid #E1E1E1;
  border-right: 0px;
  background-color: #EBEBEB;
  cursor: pointer;
}

.menu-button-icon:hover {
  color:rgb(180, 180, 180);
  background-color: #A0A0A0;
}

.menu-button-selected {
  color: rgb(118, 134, 223);
  background-color: #ffffff;
  border: none;
}

</style>
