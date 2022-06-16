<template>
    <div>
        <div>post list</div>
        <div v-for="(post, index) in posts" key="index">
            <PostCardComponent :post="post"/>
        </div>
    </div>

</template>

<script>

import PostCardComponent from '../components/PostCardComponent.vue'
export default {
    name: 'PostListComponent',
    props: ['posts'],
    components: {
        PostCardComponent
    }

}
</script>

<style>

</style>
