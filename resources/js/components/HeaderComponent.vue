<template>
    <header>
        <nav>
            <ul class="navbar-nav">
                <li v-for="(menuItem, index) in menu" :key="index" class="nav-item">
                    <router-link :to="{name: menuItem.linkName}">{{menuItem.label}}</router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
    export default {
        name: 'HeaderComponent',
        data(){
            return{
                menu: [
                    {linkName: 'home', label: 'Home'},
                    {linkName: 'blog', label: 'Blog'},
                    {linkName: 'chi-siamo', label: 'Chi siamo'},
                    {linkName: 'contacts', label: 'Contatti'}
                ]
            }
        }
    }
</script>
