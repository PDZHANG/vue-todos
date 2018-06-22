<template>
    <div id="app">
        <todoHeader></todoHeader>
        <todo></todo>
        <footers></footers>
    </div>
</template>
<script>
import todoHeader from './todo/header.vue'
import footers from './todo/foot.jsx'
import todo from './todo/todo.vue'

export default {
    components:{
        todoHeader,footers,todo,
    }
}
</script>
<style>

</style>