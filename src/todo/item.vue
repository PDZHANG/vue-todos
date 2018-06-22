<template>
    <div id="item">
        <input type="checkbox" v-model="todo.completed">
        <label>{{todo.content}}</label>
        <button @click="deleteCompleted" :class="['btn','btn-primary']">delete</button>
    </div>

</template>

<script>
    export default {
        props: {
            todo: {
                type: Object,
                required: true
            }
        },
        methods: {
            deleteCompleted() {
                this.$emit('del',this.todo.id);
            }
        }

    }

</script>

<style scoped>
    #item {
        box-sizing: border-box;
        font-size: 1.4em;
        height: 2.7em;
        border-radius: 4px;
        border: 1px solid #c8cccf;
        color: #6a6f77;
        -web-kit-appearance: none;
        -moz-appearance: none;
        display: block;
        outline: 0;
        text-decoration: none;
        width: 60%;
        padding-top: 1%;
    }

    .btn {
        display: inline-block;
        padding: 6px 12px;
        margin-bottom: 0;
        font-size: 14px;
        font-weight: normal;
        line-height: 1.42857143;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        -ms-touch-action: manipulation;
        touch-action: manipulation;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        border: 1px solid transparent;
        border-radius: 4px;
        color: ghostwhite;
        background-color: royalblue;
    }

</style>