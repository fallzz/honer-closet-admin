<template>
  <div>
    <div class="table-title">사용자 페이지 설정</div>

    <div class="subcontents-define">메인 이미지</div>
    <div class="img-container">
      <div class="img-item">
        <p>메인 컷 - 1</p>
        <img src="http://202.31.202.253:5000/assets/image/2019_fall_mainpage1.jpg" class="main-img-tag">
        <p><input type="file" accept="image/*" @change="uploadRequest({event: $event, requestName: 'mainpage', fileName: '2019_fall_mainpage1.jpg'})"></p>
      </div>
      <div class="img-item">
        <p>메인 컷 - 2</p>
        <img src="http://202.31.202.253:5000/assets/image/2019_fall_mainpage2.jpg" class="main-img-tag">
        <p><input type="file" accept="image/*" @change="uploadRequest({event: $event, requestName: 'mainpage', fileName: '2019_fall_mainpage2.jpg'})"></p>
      </div>
      <div class="img-item">
        <p>메인 컷 - 3</p>
        <img src="http://202.31.202.253:5000/assets/image/2019_fall_mainpage3.jpg" class="main-img-tag">
        <p><input type="file" accept="image/*" @change="uploadRequest({event: $event, requestName: 'mainpage', fileName: '2019_fall_mainpage3.jpg'})"></p>
      </div>
      <div class="img-item">
        <p>메인 컷 - 4</p>
        <img src="http://202.31.202.253:5000/assets/image/2019_fall_mainpage4.jpg" class="main-img-tag">
        <p><input type="file" accept="image/*" @change="uploadRequest({event: $event, requestName: 'mainpage', fileName: '2019_fall_mainpage4.jpg'})"></p>
      </div>
    </div>


    <div class="table-title">멤버 이미지</div>

    <div class="subcontents-define">경영학과</div>
    <div class="img-container">
      <div class="img-item">
        <p>류순열</p>
        <img src="http://202.31.202.253:5000/assets/image/member/3기_경영_류순열.jpg" class="member-img-tag">
        <p><input type="file" accept="image/*" @change="uploadRequest({event: $event, requestName: 'member', fileName: '3기_경영_류순열.jpg'})"></p>
      </div>
      <div class="img-item">
        <p>조준희</p>
        <img src="http://202.31.202.253:5000/assets/image/member/3기_경영_조준희.jpg" class="member-img-tag">
        <p><input type="file" accept="image/*" @change="uploadRequest({event: $event, requestName: 'member', fileName: '3기_경영_조준희.jpg'})"></p>
      </div>
    </div>

    <div class="subcontents-define">산업공학과</div>
    <div class="img-container">
      <div class="img-item">
        <p>강민정</p>
        <img src="http://202.31.202.253:5000/assets/image/member/3기_산공_강민정.jpg" class="member-img-tag">
        <p><input type="file" accept="image/*" @change="uploadRequest({event: $event, requestName: 'member', fileName: '3기_산공_강민정.jpg'})"></p>
      </div>
      <div class="img-item">
        <p>정다영</p>
        <img src="http://202.31.202.253:5000/assets/image/member/3기_산공_정다영.jpg" class="member-img-tag">
        <p><input type="file" accept="image/*" @change="uploadRequest({event: $event, requestName: 'member', fileName: '3기_산공_정다영.jpg'})"></p>
      </div>
    </div>

    <div class="subcontents-define">컴퓨터공학과</div>
    <div class="img-container">
      <div class="img-item">
        <p>김정호</p>
        <img src="http://202.31.202.253:5000/assets/image/member/3기_컴공_김정호.jpg" class="member-img-tag">
        <p><input type="file" accept="image/*" @change="uploadRequest({event: $event, requestName: 'member', fileName: '3기_컴공_김정호.jpg'})"></p>
      </div>
      <div class="img-item">
        <p>김태성</p>
        <img src="http://202.31.202.253:5000/assets/image/member/3기_컴공_김태성.jpg " class="member-img-tag">
        <p><input type="file" accept="image/*" @change="uploadRequest({event: $event, requestName: 'member', fileName: '3기_컴공_김태성.jpg'})"></p>
      </div>
    </div>


    <div class="subcontents-define">컴퓨터소프트웨어공학과</div>
    <div class="img-container">
      <div class="img-item">
        <p>김태민</p>
        <img src="http://202.31.202.253:5000/assets/image/member/3기_컴소공_김태민.jpg" class="member-img-tag">
        <p><input type="file" accept="image/*" @change="uploadRequest({event: $event, requestName: 'member', fileName: '3기_컴소공_김태민.jpg'})"></p>
      </div>
      <div class="img-item">
        <p>노상원</p>
        <img src="http://202.31.202.253:5000/assets/image/member/3기_컴소공_노상원.jpg" class="member-img-tag">
        <p><input type="file" accept="image/*" @change="uploadRequest({event: $event, requestName: 'member', fileName: '3기_컴소공_노상원.jpg'})"></p>
      </div>
      <div class="img-item">
        <p>목지현</p>
        <img src="http://202.31.202.253:5000/assets/image/member/3기_컴소공_목지현.jpg" class="member-img-tag">
        <p><input type="file" accept="image/*" @change="uploadRequest({event: $event, requestName: 'member', fileName: '3기_컴소공_목지현.jpg'})"></p>
      </div>
      <div class="img-item">
        <p>이강준</p>
        <img src="http://202.31.202.253:5000/assets/image/member/3기_컴소공_이강준.jpg" class="member-img-tag">
        <p><input type="file" accept="image/*" @change="uploadRequest({event: $event, requestName: 'member', fileName: '3기_컴소공_이강준.jpg'})"></p>
      </div>
    </div>

  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'

export default {
  created(){
    this.clickMenuButtonIcon(0)
  },
  methods: {
    ...mapActions(['uploadRequest']),
    ...mapMutations(['clickMenuButtonIcon']),
  }
}
</script>
<style>

.img-container {
  padding: 10px;
}

.img-item {
  text-align: center;
  display: inline-block;
  line-height: 0px;
}

.main-img-tag {
  margin-left: 20px;
  margin-right: 20px;
  width: 342px;
  height: 192px;
}

.member-img-tag {
  margin-left: 20px;
  margin-right: 20px;
}
</style>