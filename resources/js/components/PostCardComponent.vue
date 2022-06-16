<template>
    <div>
        <div class="title">{{title}}</div>
        <div class="content">{{content}}</div>
    </div>

</template>

<script>
export default {
    name: 'PostCardComponent',
    props: ['title', 'content']

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
