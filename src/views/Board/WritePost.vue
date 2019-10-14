<template>
  <div>
    <div class="table-title">
      <p>제목 : <input class="title-input" type="text" maxlength="99" v-model="requestBody.data.Title"/></p>
      <p>
        글 유형 : 
        <select v-model="requestBody.data.Specification">
          <option disabled value="">게시판 선택</option>
          <option value="0">공지사항</option>
          <option value="1">FAQ</option>
          <option value="2">리뷰</option>
        </select>
      </p>
      <p>비밀글 여부 : <input type="checkbox" v-model="requestBody.data.isHidden" true-value="1" false-value="0"></p>
    </div>
    
    <editor v-model="requestBody.data.Contents"
      mode="wysiwyg"
      height="800px"
    />

    <div class="buttons">
      <button v-if="this.isCreate" @click="createRequest(requestBody)"><router-link to="/Board" class="link-button">글 쓰기</router-link></button>
      <button v-if="!this.isCreate" @click="updateRequest(requestBody)"><router-link to="/Board" class="link-button">글 수정</router-link></button>
      <button><router-link to="/Board" class="link-button">취소</router-link></button>
    </div>
  </div>
</template>

<script>
import { mapGetters,mapActions, mapMutations } from 'vuex'

import 'tui-editor/dist/tui-editor.css';
import 'tui-editor/dist/tui-editor-contents.css';
import 'codemirror/lib/codemirror.css';
import Editor from '@toast-ui/vue-editor/src/Editor.vue'

export default {
    created() {
      if(this.getSelectedPost().length == 1) {
        this.isCreate = false;
        let row = this.getSelectedPost()[0]
        
        this.requestBody.data.id[0] = row.id
        this.requestBody.data.Specification = row.Specification
        this.requestBody.data.Title = row.Title
        this.requestBody.data.Contents = row.Contents
        this.requestBody.data.Writer = row.Writer
        this.requestBody.data.isHidden = row.isHidden
      }
      this.clickMenuButtonIcon(2)
    },
    data() {
      return {
        isCreate: true,
        requestBody: {
          requestName: "Board",
          data: {
            id: [],
            Specification: "",
            Title: "",
            Contents: "",
            Writer: "",
            isHidden: "",
          }
        }
      }
    },
    components: {
        Editor,
    },
    methods: {
      ...mapGetters(['getSelectedPost']),
      ...mapActions(['createRequest']),
      ...mapActions(['updateRequest']),
      ...mapMutations(['clickMenuButtonIcon'])
    }
}
</script>

<style>
.title-input {
  width: 90%;
  font-size: 16px;
}
.buttons {
  float: right;
  margin-top: 3px;
  margin-left: 20px;
}
</style>