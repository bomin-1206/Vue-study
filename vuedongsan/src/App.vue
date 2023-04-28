<template>

  <div class="black-bg" v-if="modal == true">
   <div class="white-bg">
    <h4>상세페이지임</h4>
    <p>상세페이지 내용임</p>
    <button @click="modal = fasle" class="btn">닫기</button>
   </div>
  </div>

  <div class="menu">
    <a v-for="(a,i) in menus" :key="i">{{ a }}</a> <!-- 반복문 쓸 때 :key 안쓰면 에러 -->
  </div>

  <!-- <div v-for="(a,i) in products" :key="i">
    <h4>{{ a }}</h4>
    <p>50만원</p>
  </div> -->

  <div v-for="(a, i) in oneroom" :key="i">
    <img :src="a.image" class="room-img">
    <h4 @click="modal = true">{{ a.title }}</h4>
    <p>{{ a.price }}원</p>
    <button v-on:click="신고수[i] += 1" class="btn">허위매물신고</button> <span>신고 수 : {{ 신고수[i] }}</span>
    <!-- v-on:click을 @click으로 쓸 수 있다. -->
  </div>
  <!-- <div>
    <img :src="oneroom[1].image" class="room-img">
    <h4>{{ oneroom[1].title }}</h4>
    <p>{{ oneroom[1].price }}만원</p>
    <button v-on:click="신고수[1] += 1" class="btn">허위매물신고</button> <span>신고 수 : {{ 신고수[1] }}</span>
  </div>
  <div>
    <img src="./assets/room2.jpg" class="room-img">
    <h4>{{products[2]}}</h4>
    <p>70 만원</p>
    <button v-on:click="신고수[2] += 1" class="btn">허위매물신고</button> <span>신고 수 : {{ 신고수[2] }}</span>
  </div> -->

</template>

<script>

import data from './assets/data.js'

export default {
  name: 'App',
  data() { // 모든 데이터 보관
    return {
      oneroom : data,
      modal : false,
      menus : ['Home', "Shop", "About"],
      products : ['역삼동 원룸', '천호동 원룸', '마포구 원룸'],
      신고수 : [0, 0, 0, 0, 0, 0],
    }
  },
  methods : {
    increase1(){
      this.신고수 += 1;
      // 함수 안에서 데이터 쓸 땐 this.데이터명
    },
  },
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}
.menu a {
  color: white;
  padding : 10px;
}
.room-img {
  width: 30%;
  margin-top: 40px;
}
body {
  margin: 0
}
div {
  box-sizing: border-box;
}
.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  position: fixed;
  padding: 20px;
}
.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}
.btn {
  padding: 10px;
  border: none;
  border-radius: 5px;
  background: darkslateblue;
  color: white;
}
</style>
