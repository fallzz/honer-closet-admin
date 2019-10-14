<template>
  <div>
    <stock-navigation-bar></stock-navigation-bar>

    <div class="table-title">전체 상품 {{this.getOthers.rows.length}} 개, 판매 중 상품 {{this.getOthers.rows.length - this.getOthersProgressing.rows.length}} 개, 입금 대기 상품 {{this.getOthersProgressing.rows.length}}개</div>
    <div class="subcontents-define">전체 상품 {{this.getOthers.rows.length}} 개
      <div class="add-button-container"><button class="crud-button" @click="showModal = 1">상품 추가 등록</button></div>
    </div>
    <vue-good-table
      :columns="getOthers.columns"
      :rows="getOthers.rows"
      :sort-options="{
        enabled: true,
        initialSortBy: {field: 'Code', type: 'asc'}
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
      @on-row-click="stockRowClick"
      @on-selected-rows-change="selectionStockChanged">
      <template slot="table-row" slot-scope="props">
        <span v-if="props.column.field == 'Thumbnail'">
          <img class="thumbnail" :src="props.row.Thumbnail"/>
        </span>
        <span v-else>
          {{props.formattedRow[props.column.field]}}
        </span>
      </template>
      <div slot="selected-row-actions">
        <button class="crud-button in-table-button" @click="bindModal()" v-bind:class="{ inactive : this.selectedStockRows.length != 1 }">상품 정보 수정</button>
        <button class="crud-button in-table-button" @click="deleteRequest(getSelectedPostID)">상품 정보 삭제</button>
      </div>
    </vue-good-table>

    <div class="subcontents-define">입금 대기 상품 {{this.getOthersProgressing.rows.length}} 개
      <div class="add-button-container"><button class="crud-button">입금 확인</button></div>
    </div>
    <vue-good-table
      :columns="getOthersProgressing.columns"
      :rows="getOthersProgressing.rows"
      :sort-options="{
        enabled: true,
        initialSortBy: {field: 'Code', type: 'asc'}
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
    }">
      <template slot="table-row" slot-scope="props">
        <span v-if="props.column.field == 'Thumbnail'">
          <img class="thumbnail" :src="props.row.Thumbnail"/>
        </span>
        <span v-else>
          {{props.formattedRow[props.column.field]}}
        </span>
      </template>
    </vue-good-table>

    <modal v-if="showModal" @close="showModal = 0">
      <div slot="header">
        <div v-if="showModal == 1">재고 등록</div>
        <div v-if="showModal == 2">재고 수정</div>
      </div>
      <div slot="body">
        <p>
          카테고리 :
          <select v-model="requestBody.data.Specification">
            <option value="T">상의</option>
            <option value="B">하의</option>
            <option value="O">외투</option>
            <option value="G">잡화</option>
            <option value="S">정장류</option>
            <option value="E">기타</option>
          </select>

          성별 :
          <select v-model="requestBody.data.codeSex">
            <option value="M">남성용</option>
            <option value="F">여성용</option>
            <option value="U">공용</option>
          </select>
          </p>
          <p>
          상태 :
          <select v-model="requestBody.data.codeState">
            <option value="S">S</option>
            <option value="A">A</option>
            <option value="B">B</option>
          </select>

          진행상황 :
          <select v-model="requestBody.data.Progress">
            <option value="0">등록 완료</option>
            <option value="1">판매 중</option>
            <option value="2">입금 대기</option>
            <option value="3">판매 완료</option>
            <option value="4">감모손실</option>
            <option value="9">삭제됨</option>
          </select>
        </p>
        <p>상품번호 : <input class="title-input" type="text" v-model="requestBody.data.codeNumber"/></p>
        <p>상품설명 : <textarea class="title-input" type="textarea" maxlength="100" rows="5" v-model="requestBody.data.Info"/></p>
        <p>가격 : <input class="title-input" type="number" v-model="requestBody.data.FirstPrice"/></p>
        <p>할인율 : <input class="title-input" type="number" v-model="requestBody.data.DiscountRate"/></p>
        
      </div>
      <div slot="footer">
        <div>
          <button v-if="showModal == 1" @click="createRequest(requestBody)" v-on:click="showModal = 0">등록</button>
          <button v-if="showModal == 2" @click="updateRequest(requestBody)" v-on:click="showModal = 0">수정</button>
          <button v-on:click="showModal = 0">취소</button>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
import { mapActions,mapMutations,mapGetters } from 'vuex'

import { VueGoodTable } from 'vue-good-table'
import 'vue-good-table/dist/vue-good-table.css'

import StockNavigationBar from '@/views/Stock/StockNavigationBar'

import Modal from './Modal'

export default {
  created() {
    this.getRequest('Product')
    this.setSelectedPost([])
    this.clickMenuButtonIcon(3)
  },
  data() {
    return {
      selectedStockRows: [],
      selectedStockRow: {},
      selectedStockProgressRows: [],
      selectedStockProgressRow: {},
      showModal: 0,
      requestBody: {
        requestName: "Product",
        data: {
            Specification: "",
            codeState: "",
            codeSex: "",
            codeNumber: 0,
            Info: "",
            FirstPrice: 0,
            DiscountRate: 0,
            Progress: ""
        }
      },
    }
  },
  methods: {
    ...mapActions(['getRequest']),
    ...mapActions(['deleteRequest']),
    ...mapMutations(['setSelectedPost']),
    ...mapMutations(['clickMenuButtonIcon']),
    selectionStockChanged(params) {
      // params.selectedRows - all rows that are selected (this page)
      this.selectedStockRows = params.selectedRows
      this.setSelectedPost(this.selectedStockRows)
      if(params.selectedRows.length == 1) {
        this.selectedStockRow = params.selectedRows[0]
      }
    },
    selectionStockProgressingChanged(params) {
      // params.selectedRows - all rows that are selected (this page
      this.selectedStockRows = params.selectedRows
      this.setSelectedPost(this.selectedProgressStockRows)
      if(this.selectedProgressStockRows.length == 1) {
        this.selectedStockRow = params.selectedRows[0]
      }
    },
    stockRowClick(params) {
      this.selectedStockRow = params.row
    },
    progressRowClick(params) {
      this.selectedStockProgressRow = params.row
    },
    justModal() {
      this.requestBody.data.Progress = "0"
      this.requestBody.data.Specification = ""
      this.requestBody.data.codeState = ""
      this.requestBody.data.codeSex = ""
      this.requestBody.data.Info = ""
      this.requestBody.data.FirstPrice = 0
      this.requestBody.data.DiscountRate = 0
      this.requestBody.data.codeNumber = ""
      this.showModal = 1
    },
    bindModal() {
      if (this.selectedStockRow.Specification == "상의") this.requestBody.data.Specification = "T";
      else if (this.selectedStockRow.Specification == "하의") this.requestBody.data.Specification = "B";
      else if (this.selectedStockRow.Specification == "외투") this.requestBody.data.Specification = "C";
      else if (this.selectedStockRow.Specification == "잡화") this.requestBody.data.Specification = "G";
      else if (this.selectedStockRow.Specification == "정장류") this.requestBody.data.Specification = "S";
      else this.requestBody.data.Specification = "O";

      if (this.selectedStockRow.Progress == "등록완료") this.requestBody.data.Progress = "0";
      else if (this.selectedStockRow.Progress == "판매중") {
          this.requestBody.data.Progress = "1";
      } else if (this.selectedStockRow.Progress == "입금대기") {
          this.requestBody.data.Progress = "2";
      } else if (this.selectedStockRow.Progress == "판매완료") {
          this.requestBody.data.Progress = "3";
      } else if (this.selectedStockRow.Progress == "감모손실") this.requestBody.data.Progress = "4";

      this.requestBody.data.codeNumber = this.selectedStockRow.Code.substr(3,6)

      this.requestBody.data.codeState = this.selectedStockRow.Code.charAt(2)
      this.requestBody.data.codeSex = this.selectedStockRow.Code.charAt(1)
      this.requestBody.data.Info = this.selectedStockRow.Info
      this.requestBody.data.FirstPrice = this.selectedStockRow.FirstPrice
      this.requestBody.data.DiscountRate = this.selectedStockRow.DiscountRate
      this.showModal = 2
    },
    ...mapActions(['createRequest']),
    ...mapActions(['updateRequest']),
  },
  computed: {
    ...mapGetters(['getOthers']),
    ...mapGetters(['getOthersProgressing']),
    ...mapGetters(['getSelectedPost']),
    ...mapGetters(['getSelectedPostID']),
  },
  components: {
    VueGoodTable,
    Modal,
    StockNavigationBar
  }
}
</script>

<style>
.thumbnail {
  width : 100px;
  height : 100px;
}
</style>