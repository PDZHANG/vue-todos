<template>
    <div id="tabs">
        <span>{{unCompletedCount}} items left</span>
        <span v-for="state in states" :class="[state,filter===state?'actived':'']" :key="state" @click="toggleFilter(state)">
            {{state}}
        </span>
        <span @click="clearAllCompleted">clearCompleted</span>

    </div>
</template>

<script>
export default {
    data(){
        return {
            states:['all','active','completed']
        }
    },
    props:{
        filter:{
            type:String,
            required:true
        },
        todos:{
            type:Array,
            required:true
        }
    },
    computed:{
        unCompletedCount(){

            return this.todos.filter(t=> !t.completed).length;
        }
    },
    methods:{
        toggleFilter(state){
            this.$emit('toggle',state)
        },
        clearAllCompleted(){
            this.$emit('clearAllCompleted');
        }

    }
}

</script>

<style scoped>

    #tabs{
        text-align: center;
        margin-left: -40%;
        font-family: Consolas;
        margin-top:2%;
    }
    #tabs span{
        cursor:pointer;
        margin: 10px;


    }
    span.actived {

        cursor:pointer;
        color: red;
    }
    span:hover {
        border-radius:4px;
        border:1px solid #c8cccf;
    }
</style>