<template>
    <div>
        <div>post list</div>
        <div v-for="(post, index) in posts" key="index">
            <PostCardComponent :title="post.title" :cover="post.cover" :content="post.content"/>
        </div>
    </div>

</template>

<script>

import PostCardComponent from '../components/PostCardComponent.vue'
export default {
    name: 'PostListComponent',
    props: ['posts', 'content'],
    components: {
        PostCardComponent
    }

}
</script>

<style>

</style>
