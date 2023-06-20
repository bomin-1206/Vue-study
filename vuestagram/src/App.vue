<template>
  <div class="header">
    <ul class="header-button-left">
      <li @click="step-=1">Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step == 1" @click="step+=1">Next</li>
      <li v-if="step == 2" @click="publish">발행</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <!-- <h4>안녕 {{ $store.state.name }}</h4>
  <button @click="$store.commit('이름변경')">버튼</button>         
  <h4>나이 {{ $store.state.age }}</h4>
  <button @click="$store.commit('나이변경', 10)">버튼</button> -->

  <!-- <p>{{ $store.state.more }}</p>
  <button @click="$store.dispatch('getData')">더보기버튼</button> -->

  <p>{{name}} {{age}} {{likes}} {{내이름}}</p>

  <Container @write="작성한글 = $event" :게시물="게시물" :step="step" :이미지="이미지" :필터="필터" />
  <!-- <button @click="more">더보기</button> -->

  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
 </div>

 <!-- <button @click="step = 0">버튼0</button>
 <button @click="step = 1">버튼1</button>
 <button @click="step = 2">버튼2</button>
 <div v-if="step == 0">내용0</div>
 <div v-if="step == 1">내용1</div>
 <div v-if="step == 2">내용2</div> -->

</template>

<script>
import { mapMutations, mapState } from 'vuex';
import Container from './components/ThisContainer.vue';
import postdata from './postdata.js';
// import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {
      게시물 : postdata,
      더보기 : 0,
      step: 3,
      이미지 : '',
      작성한글 : '',
      필터 : '',
      count : 0,
    }
  },
  mounted() {
    this.emitter.on('작명', (a)=>{
      this.필터 = a;
    });
  },
  components: {
    Container,
  },
  computed : { // computed 함수는 return이 꼭 있어야함
    name(){
      return this.$store.state.name
    },
    ...mapState([ 'name', 'age', 'likes' ]),
    ...mapState({ 내이름 : 'name' })
    // now2() { // computed함수는 사용해도 실행되지 않습니다
    // // 처음 실행하고 값을 간직함
    // // now2()가 아닌 now2로 표시
    //   return new Date()
    // },
  },
  methods: {
    ...mapMutations([ 'setMore', '좋아요변경' ]),
    // now() { // methods 함수는 사용할 때마다 실행됨
    // // now()로 표시
    //   return new Date()
    // },
    publish() {
      var 내게시물 = {
        name: "min",
        userImage: "https://placeimg.com/100/100/arch",
        postImage: this.이미지,
        likes: 295,
        date: "May 15",
        liked: false,
        content: this.작성한글,
        filter: this.필터,
      };
      this.게시물.unshift(내게시물); // 왼쪽의 array에 자료집어넣어줌
      this.step = 0;
    },
    // more() {
    //   // post 요청은 axios.post()
    //   // 요청 했을 때 실패시 실행할 코드는 .fetch()
    //   axios.get(`https://codingapple1.github.io/vue/more${this.더보기}.json`)
    //   .then((result)=>{
    //     this.게시물.push(result.data);
    //     this.더보기 += 1;
    //   })
    // },
    upload(e){
      let 파일 = e.target.files;
      console.log(파일[0]);
      this.이미지 = URL.createObjectURL(파일[0]);
      console.log(this.이미지);
      this.step += 1;
    },
  },
}
</script>

<style>
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}  
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
</style>
