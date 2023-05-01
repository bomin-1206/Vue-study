<template>
  <div class="black-bg" v-if="modal == true">
   <div class="white-bg">
    <img :src="oneroom[누른거].image" style="width: 40%">
    <h4>{{ oneroom[누른거].title }}</h4>
    <p> {{ oneroom[누른거].content }}</p>
    <!-- <input @input="month = $event.target.value"> -->
    <input v-model="month">
    <!-- <textarea v-model="month"></textarea>
    <select v-model="month">
      <option>213</option>
      <option>213134</option>
      <option>21323456</option>
    </select> -->
    <p>{{month}}개월 선택함 {{ oneroom[누른거].price * month }}원</p>
    <button @click="$emit('closeModal')" class="btn">닫기</button>
   </div>
  </div>
</template>

<script>
export default {
    name : 'ThisModal',
    data(){
      return {
        month : 1,
      }
    },
    // props : { 데이터이름 : 자료형이름 }
    props: {
      oneroom : Array,
      누른거 : Number,
      modal : Boolean,
    },
}
</script>

<style>

</style>