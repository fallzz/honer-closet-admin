<template>
  <div>
    <div class="table-title">회원 목록</div>
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
      :select-options="{
        enabled: true,
        clearSelectionText: '선택 해제'
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
      <div slot="selected-row-actions">
        <button class="crud-button in-table-button" @click="showModal = true" v-bind:class="{ inactive : getSelectedPost.length != 1 }">회원 정보 수정</button>
        <button class="crud-button in-table-button" @click="deleteRequest(getSelectedPostID)">회원 정보 삭제</button>
      </div>
    </vue-good-table>

    <div class="table-title">관리자 목록</div>
    <div class="subcontents-define">총 관리자수 {{this.getAdmin.rows.length}} 명
      <div class="add-button-container"><button class="crud-button" @click="showModal = true">관리자 추가 등록</button></div>
    </div>
    <vue-good-table
      :columns="getAdmin.columns"
      :rows="getAdmin.rows"
      :sort-options="{
        enabled: true,
        initialSortBy: {field: 'craetedAt', type: 'date'}
      }"
      :select-options="{
        enabled: true,
        clearSelectionText: '선택 해제'
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
      <div slot="selected-row-actions">
        <button class="crud-button in-table-button" @click="showModal = true" v-bind:class="{ inactive : getSelectedPost.length != 1 }">관리자 정보 수정</button>
        <button class="crud-button in-table-button" @click="deleteRequest(getSelectedPostID)">관리자 정보 삭제</button>
      </div>
    </vue-good-table>

    <div class="table-title">생일인 사람 목록</div>
    <div class="subcontents-define">총 생일인 사람 수 {{this.getBirthdayCustomer.rows.length}} 명
    </div>
    <vue-good-table
      :columns="getBirthdayCustomer.columns"
      :rows="getBirthdayCustomer.rows"
      :sort-options="{
        enabled: true,
        initialSortBy: {field: 'createdAt', type: 'date'}
      }"
      :select-options="{
        enabled: true,
        clearSelectionText: '선택 해제'
        }"
      :search-options="{ enabled: true }"
      :pagination-options="{
        enabled: true,
        mode: 'pages',
        perPage: 10,
        perPageDropdown: [5, 10, 15, 20]
      }"
      @on-row-click="nop"
      @on-selected-rows-change="selectionChanged"/>

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

import Modal from './Modal'

import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  created() {
    this.getRequest('Customer')
    this.setSelectedPost([])
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
    ...mapActions(['getRequest']),
    ...mapActions(['deleteRequest']),
    ...mapMutations(['setSelectedPost']),
    selectionChanged(params) {
      // params.row - row object 
      // params.pageIndex - index of this row on the current page.
      // params.selected - if selection is enabled this argument 
      // indicates selected or not
      // params.event - click event

      // params.selectedRows - all rows that are selected (this page)
      this.setSelectedPost(params.selectedRows)
    },
    nop() {}
  },
  computed: {
    ...mapActions(['createRequest']),
    ...mapGetters(['getCustomer']),
    ...mapGetters(['getAdmin']),
    ...mapGetters(['getBirthdayCustomer']),
    ...mapGetters(['getSelectedPost']),
    ...mapGetters(['getSelectedPostID']),
  },
  components: {
    VueGoodTable,
    Modal
  }
}
</script>