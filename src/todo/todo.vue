<template>
    <section class="real-app">
        <input type="text" placeholder="接下来要做什么？" autofocus="autofocus" class="add-input" @keyup.enter="addTodoItem">
        <item :todo="todo" v-for="todo in filteredTodos" :key="todo.id" @del="delItem"></item>
        <tabs :filter="filter"
              :todos="todos"
              @toggle="toggleFilter"
              @clearAllCompleted="clearAllCompleted"
        ></tabs>
    </section>
</template>

<script>
import tabs from './tabs.vue'
import item from './item.vue'
let id = 0;
   export  default {
       data(){
           return {
               filter:'all',
               todos:[]
           }
       },
       components:{
           tabs,item
       },
       computed:{
           filteredTodos(){
               if(this.filter==='all'){
                   return this.todos;
               }
               const completed=this.filter==='completed';
               return this.todos.filter(todo=>todo.completed==completed);
           }
       },
       methods:{
           addTodoItem(e){
               if(e.target.value!==''){
                   this.todos.unshift({
                       id : id++,
                       content:e.target.value,
                       completed:false

                   });
                   e.target.value='';
               }
           },
           delItem(id){
               this.todos.splice(this.todos.findIndex(todo => todo.id === id ),1)
           },
           toggleFilter(state){
               this.filter=state;
           },
           clearAllCompleted(){
                this.todos = this.todos.filter(t => !t.completed)
           }
       }
   }

</script>

<style scoped>
    .real-app{
        padding-left: 31%;
    }
    input[type="text"]{
        box-sizing: border-box;

        font-size:1.4em;
        height:2.7em;
        border-radius:4px;
        border:1px solid #c8cccf;
        color:#6a6f77;
        -web-kit-appearance:none;
        -moz-appearance: none;
        display:block;
        outline:0;
        padding:0 1em;
        text-decoration:none;
        width: 60%;
    }
    input[type="text"]:focus{
        border:1px solid #ff7496;
    }
</style>