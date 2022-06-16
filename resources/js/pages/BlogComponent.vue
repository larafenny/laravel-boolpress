<template>
    <div>
        <div>BLOG</div>
        <div>
            <PostListComponent :posts="posts"/>

        </div>
    </div>


</template>

<script>

import PostListComponent from '../components/PostListComponent.vue'
import PostCardComponent from '../components/PostCardComponent.vue'

export default {
    name: 'BlogComponent',
    components: {
        PostListComponent,
        PostCardComponent,

    },
    data(){
        return{
            posts: []
        }
    },
    mounted() {
        console.log('monted');

        //usiamo axios per recuperare la nostra api (utlizziamo promessa)
        window.axios.get('http://127.0.0.1:8000/api/posts')
        .then(({status, data})=>{
            console.log(data);
            if (status === 200 & data.success){
                this.posts = data.results;
            }
        }).catch(error=>{
            console.log(error);
        })
            }

}


</script>


<style>

</style>
