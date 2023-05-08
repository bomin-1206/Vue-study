<template>
  <Post :게시물="게시물[i]" v-for="(a,i) in 게시물" :key="i"/>
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