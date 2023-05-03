<template>
  <div>
    <Post :data="data[0]" />
    <Post :data="data[1]" />
    <Post :data="data[2]" />
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
        data : Object,
    }
}
</script>

<style>

</style>