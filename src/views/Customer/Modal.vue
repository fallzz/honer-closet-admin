<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <slot name="header">
              회원 추가
            </slot>
          </div>
          <div class="modal-body">
            <slot name="body">
              
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
            </slot>
          </div>
            <slot name="footer">
              default body
            </slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapActions,mapGetters } from 'vuex'

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
    },
    data() {
        return {
            isCreate: true,
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
      ...mapGetters(['getSelectedPost']),
      ...mapActions(['createRequest']),
      ...mapActions(['updateRequest'])
    }
}
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

.title-input {
  width: 90%;
  font-size: 16px;
}
.buttons {
  float: right;
  margin-top: 3px;
  margin-left: 20px;
}
/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>