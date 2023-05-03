<template>
  <div v-for="(a,i) in 게시물" :key="i">
    <Post :게시물="게시물[i]" />
  </div>
</template>

<script>
import Post from './ThisPost.vue'

export default {
    name: 'ThisContainer',
    components : {
        Post,
    },
    props : {
        게시물 : Array,
    }
}
</script>

<style>

</style>