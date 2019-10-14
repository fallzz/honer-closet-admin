<template>
  <div>
    <div id="navigation-bar">
      <ul id="category-container">
        <li class="category-item"><router-link to="/Stock" class="submenu">전체</router-link></li>
        <li class="category-item"><router-link to="/Stock/top" class="submenu">상의</router-link></li>
        <li class="category-item"><router-link to="/Stock/bottom" class="submenu">하의</router-link></li>
        <li class="category-item"><router-link to="/Stock/coat" class="submenu">외투</router-link></li>
        <li class="category-item"><router-link to="/Stock/general" class="submenu">잡화</router-link></li>
        <li class="category-item"><router-link to="/Stock/suit" class="submenu">정장류</router-link></li>
        <li class="category-item"><router-link to="/Stock/others" class="submenu">기타</router-link></li>
      </ul>
      <div class="discount-button-container">
        <button class="discount-button" @click="updateRequest(getSelectedPostID_discount_20)">1차 할인(20%)</button>
        <button class="discount-button" @click="updateRequest(getSelectedPostID_discount_30)">2차 할인(30%)</button>
        <button class="discount-button" @click="updateRequest(getSelectedPostID_selloff)">3차 할인(5천원)</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  methods: {
    ...mapActions(['updateRequest'])
  },
  computed: {
    ...mapGetters(['getSelectedPostID_discount_20']),
    ...mapGetters(['getSelectedPostID_discount_30']),
    ...mapGetters(['getSelectedPostID_selloff']),
  }
}
</script>

<style scoped>
#navigation-bar {
  height: 50px;
  width: 100%;
  margin:0 auto;
  border-bottom:2px solid #ddd;
  float:left;
}

#category-container:after {
 display: inline-block;
 width: 100%;
 height: 100%;
 margin-left:0px;
}

.category-item {
 height: 30px;
 list-style:none;
 width:100px;
 border-top:1px solid #ddd;
 border-right:1px solid #ddd;
 border-left:1px solid #ddd;
 border-radius: 80px 90px 0px 0px / 80px 80px 0px 80px;
 text-align:center;
 float:left;
}

.submenu {
  text-decoration: none;
  color:black;
}

.router-link-exact-active {
  text-decoration-line: underline;
}

.discount-button-container {
  float: right;
}

.discount-button {
  margin-right: 12px;
}
</style>