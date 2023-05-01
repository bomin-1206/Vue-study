<template>
  <div class="black-bg" v-if="modal == true">
   <div class="white-bg">
    <img :src="oneroom[누른거].image" >
    <h4>{{ oneroom[누른거].title }}</h4>
    <p> {{ oneroom[누른거].content }}</p>
    <p> {{ oneroom[누른거].price }}원</p>
    <ThisDiscount />
    <button @click="modal = fasle" class="btn">닫기</button>
   </div>
  </div>
</template>

<script>
export default {
    name : 'ThisModal'
}
</script>

<style>

</style>