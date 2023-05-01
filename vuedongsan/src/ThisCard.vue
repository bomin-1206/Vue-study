<template>
  <div>
    <img :src="a.image" class="room-img">
    <h4 @click="send">{{ a.title }}</h4> <!-- 부모에게 메세지 보낼 땐 $emit() -->
    <p>{{ a.price }}원</p>
    <button class="btn">허위매물신고</button> <span>신고 수 : {{ 신고수[i] }}</span>
    <!-- v-on:click을 @click으로 쓸 수 있다. -->
  </div>
</template>

<script>
export default {
    name : "ThisCard",
    props: {
        신고수 : Array,
        a: Object,
        i : Number,
    },
    methods: {
        send(){
            this.$emit('openModal', this.a.id)
        }
    }
}
</script>

<style>

</style> 