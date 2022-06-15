<template>
    <header>
        <nav>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link :to="{name: 'contacts'}">Contatti</router-link>

                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
    export default {
        name: 'HeaderComponent'
    }
</script>
