<template>
<div style="padding: 10px">
  <h4>팔로워 </h4>
  <input placeholder="🔍" @input="search($event.target.value)">
  <div class="post-header" v-for="(a,i) in follower" :key="i">
    <div class="profile" :style="`background-image: url(${a.image})`"></div>
    <span class="profile-name">{{ a.name }}</span>
  </div>
</div>
</template>

<script>
import { onMounted, ref } from 'vue';
import axios from 'axios';
// import {useStore} from 'vuex';

export default {
    name : 'MyPage',
    props: {
        one : Number,
    },
    setup() { // 데이터 생성, 조작 할 수 있고,
    // methods, computed, watch 만들 수 있고,
    // hook도 걸 수 있음
        let follower = ref([]);
        let followerOriginal = ref([]);
        // let test = reactive({ name: 'kim'});

        // let { one } = toRefs(props);
        // console.log(one.value);

        // let re = computed( ()=>{ return follower.value.length } )
        // console.log(re.value)

        // let store = useStore();
        // console.log(store.state.name)
        // console.log(store.commit())

        function search(검색어) {
            let newFollower = followerOriginal.value.filter((a)=>{
                return a.name.indexOf(검색어) != -1
            });
            follower.value = [...newFollower]
        }

        onMounted(()=>{
            axios.get('/follower.json').then((a)=>{
                follower.value = a.data;
                followerOriginal.value = [...a.data];
            })
        })

        return { follower, search }
    },
    data() {
        return {

        }
    },
}
</script>

<style>

</style>