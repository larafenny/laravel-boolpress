<template>
    <div>
        <div class="title">{{title}}</div>
        <div class="content">{{content}}</div>

        <router-link :to="{name: 'single-blog', params: {id}}">Visualizza</router-link>
    </div>

</template>

<script>
export default {
    name: 'PostCardComponent',
    props: ['title', 'content', 'id']

}
</script>

<style lang="scss" scoped>

.title{
    color: red;
}

.content{
    color: blue;
}

</style>>

</style>
