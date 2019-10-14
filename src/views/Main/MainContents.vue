<template>
  <div>
    <main-navigation-bar></main-navigation-bar>

    <div class="table-title">신규가입회원</div>
    <div class="subcontents-define">총 회원수 {{this.getCustomer.rows.length}} 명
      <div class="add-button-container"><button class="crud-button" @click="showModal = true">회원 추가 등록</button></div>
    </div>
    <vue-good-table
      :columns="getCustomer.columns"
      :rows="getCustomer.rows"
      :sort-options="{
        enabled: true,
        initialSortBy: {field: 'createdAt', type: 'date'}
      }"
      :search-options="{ enabled: true }"
      :pagination-options="{
        enabled: true,
        mode: 'pages',
        perPage: 10,
        perPageDropdown: [5, 10, 15, 20]
      }"
      @on-row-click="nop"
      @on-selected-rows-change="selectionChanged">
    </vue-good-table>
    
    <div class="table-title">최근등록게시물</div>
    <div class="subcontents-define">총 게시물 수 {{this.getBoard.rows.length}} 개
    </div>
    <vue-good-table
      :columns="getBoard.columns"
      :rows="getBoard.rows"
      :sort-options="{
        enabled: true,
        initialSortBy: {field: 'id', type: 'number'}
      }"
      :search-options="{ enabled: true }"
      :pagination-options="{
        enabled: true,
        mode: 'pages',
        perPage: 5,
        perPageDropdown: [5,10,15,20]
      }"
      @on-row-click="nop"
      @on-selected-rows-change="selectionChanged">
    </vue-good-table>

    <modal v-if="showModal" @close="showModal = false">
      <div slot="header">
        회원 추가
      </div>
      <div slot="body">
        <p>ID : <input class="title-input" type="text" maxlength="15" v-model="requestBody.data.Name"/></p>
        <p>Password : <input class="title-input" type="password" maxlength="20" v-model="requestBody.data.Password"/></p>
        <p>E_mail : <input class="title-input" type="text" maxlength="20" v-model="requestBody.data.E_mail"/></p>
        <p>
          성별 : 
          <select v-model="requestBody.data.Sex">
            <option value="0">남자</option>
            <option value="1">여자</option>
          </select>
        </p>
        <p>
          회원구분 : 
          <select v-model="requestBody.data.Specification">
            <option value="0">관리자</option>
            <option value="1">학생</option>
            <option value="1">교수</option>
          </select>
        </p>
        <p>생년월일 : <input type="number" maxlength="20" v-model="requestBody.data.Birth" placeholder="예시: 19941230"/>
        <p>인증 여부 : <input type="checkbox" v-model="requestBody.data.isCertificated" true-value="1" false-value="0"></p>
      </div>
      <div slot="footer">
        <div>
          <button @click="createRequest(requestBody)" v-on:click="showModal = false">등록</button>
          <button v-on:click="showModal = false">취소</button>
        </div>
      </div>
    </modal>
  </div>
</template>

<script scoped>
import { VueGoodTable } from 'vue-good-table'
import 'vue-good-table/dist/vue-good-table.css'

import { mapGetters, mapActions, mapMutations } from 'vuex'

import MainNavigationBar from './MainNavigationBar'

import Modal from './Modal'
export default {
  created() {
    this.getRequest('Product')
    this.getRequest('Customer')
    this.getRequest('Board')
  },
  data() {
    return {
      showModal: false,
      requestBody: {
        requestName: "Customer",
        data: {
            Name: "",
            Password: "",
            E_mail: "",
            Sex: "",
            Specification: "",
            Birth: "",
            PhoneNum: "",
            isCertificated: "",
        }
      }
    }
  },
  methods: {
    ...mapActions(['createRequest']),
    ...mapActions(['getRequest']),
    selectionChanged(params) {
      // params.row - row object 
      // params.pageIndex - index of this row on the current page.
      // params.selected - if selection is enabled this argument 
      // indicates selected or not
      // params.event - click event

      // params.selectedRows - all rows that are selected (this page)
      console.log(params.selectedRows);
    },
    nop() {},
    ...mapActions(['deleteRequest']),
    ...mapMutations(['setSelectedPost']),
  },
  computed: {
    ...mapGetters(['getCustomer']),
    ...mapGetters(['getBoard']),
    ...mapGetters(['getSelectedPost']),
    ...mapGetters(['getSelectedPostID']),
  },
  components: {
    VueGoodTable,
    MainNavigationBar,
    Modal
  }
}
</script>