<template>
  <div id="wrapper">
    <header id="contens-header-bar">
      <div id="header-text"> {{ selectedSubmenu }}</div>
    </header>
    
    <div class="contents-wrapper">
      <router-view></router-view>
    </div>
  </div>
</template>

<script scoped>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['selectedSubmenu']),
    ...mapGetters(['selectedMenuNumber'])
  }
}
</script>

<style>
#wrapper {
  width: 100%;
  height: 100%;
}

#contens-header-bar {
  height: 37px;
  background-color: #FFFFFF;
  border-bottom: 1.4px solid #E1E1E1;
}

#header-text {
  padding: 5px;
  margin-left: 5px;
  float: left;
  font-weight: bold;
  font-size: 17px;
}

.contents-wrapper {
  text-align: left;
  padding: 15px;
  height: 100%;
  border-bottom: 1.4px solid #E1E1E1;
  border-right: 1.4px solid #E1E1E1;
}

.table-title {
  margin-top: 20px;
  margin-bottom: 10px;
  font-weight: bold;
}

.subcontents-define {
  background-color: #EAEAEA;
  padding: 3px;
  padding-left: 18px;
  margin-top: 10px;
  margin-bottom: 1px;
}

.add-button-container {
  float: right;
  margin-right: 11px;
}

.crud-button {
  cursor: pointer;
	color: rgba(60, 60, 60);
}

.crud-button:hover {
	color: rgb(206, 201, 201);
}

.in-table-button {
  margin-left: 10px;
}

.link-button {
  text-decoration: none;
	color: rgba(60, 60, 60);
  font-weight: normal;
  cursor: pointer;
}

.link-button:hover {
	color: rgb(148, 155, 165);
}

.inactive {
  pointer-events:none;
  color: Gray;
  background-color: #ddd;
  background: #ddd;
}
</style>