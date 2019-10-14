<template>
  <div>
    <div class="table-title">게시글 목록</div>
    <div class="subcontents-define">전체 게시물 {{ this.getBoard.rows.length }} 개
      <div class="add-button-container">
        <button class="crud-button">
          <router-link to="/Board/WritePost">새 글 작성</router-link>
        </button>
      </div>
    </div>
    <vue-good-table
      :columns="getBoard.columns"
      :rows="getBoard.rows"
      :sort-options="{
        enabled: true,
        initialSortBy: {field: 'id', type: 'number'}
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
        perPageDropdown: [5,10,15,20]
      }"
      @on-row-click="nop"
      @on-selected-rows-change="selectionChanged">
      <div slot="selected-row-actions">
        <button class="crud-button" v-bind:class="{ inactive : getSelectedPost.length != 1 }">
          <router-link to="/Board/WritePost" class="link-button">게시글 수정</router-link>
        </button>
        <button class="crud-button link-button" @click="deleteRequest(getSelectedPostID)">게시글 삭제</button>
      </div>
    </vue-good-table>
  </div>
</template>

<script scoped>
import { VueGoodTable } from 'vue-good-table'
import 'vue-good-table/dist/vue-good-table.css'

import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  created() {
    this.getRequest('Board')
    this.setSelectedPost([])
    this.clickMenuButtonIcon(2)
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
    nop() {},
    ...mapMutations(['clickMenuButtonIcon']),
  },
  computed: {
    ...mapGetters(['getBoard']),
    ...mapGetters(['getSelectedPost']),
    ...mapGetters(['getSelectedPostID'])
  },
  components: {
    VueGoodTable
  }
}
</script>

<style>

</style>