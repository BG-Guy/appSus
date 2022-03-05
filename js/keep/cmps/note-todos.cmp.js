import { noteService } from "../services/note.service.js";  
  
  export default {
  props:['note'],
    template: `
          <section >
              <label>
                <p class="note-title">{{note.title}}</p>
                <div class="todo-input space-around">
                  <input :placeholder="note.info.label" type="text" v-model="val"/>
                  <div class="importance-btn space-between">
                    <i @click="setImportance(1)" class="importance high" ></i>
                    <i @click="setImportance(2)" class="importance medium" ></i>
                    <i @click="setImportance(3)" class="importance low" ></i>
                    <i @click="setImportance(4)" class="importance no" ></i>
                  </div>
                  <button @click="addTodo" class="add-btn" :style="todoColor"  >Add</button>

                </div>
                  <ul>
                    <li :style="todoStyle(idx)" class="todo space-between" v-for="(todo, idx) in todos" >
                      <div class="left-side-todo align-center">
                        <i  class="todo-done-btn" ></i>
                        <input type="checkbox"value="todo.isDone" @input="markTodoAsDone(idx)" >
                        <p contenteditable="true" :class="ifDone(idx)">{{ todo.txt }}</p>
                      </div>
                      <div class="right-side-todo ">
                        <div class="importance-btn space-between">
                            <i @click="setImportance(1, idx)" class="importance high" ></i>
                            <i @click="setImportance(2, idx)" class="importance medium" ></i>
                            <i @click="setImportance(3, idx)" class="importance low" ></i>
                            <i @click="setImportance(4, idx)" class="importance no" ></i>
                        </div>
                        <button class="close" @click ="deleteTodo(idx)" >X</button>

                      </div>
                      </li>
                      <div class="sort-btns">
                        <span @click="sort('accending')">⏫</span>
                        <span @click="sort('decending')">⏬</span>
                      </div>
                  </ul>
              </label>  
          </section>
          `,
   
    data() {
      return {
        val: "",
        todos: [],
        importance: '',
        todoColor: '#F2F3F4',
      }
    },
    created() {
      this.todos = this.note.info.todos.map((todo) => todo)
    },

    methods: {

      addTodo() {
        console.log(this.todos);
        this.todos.push({
          txt: this.val,
          isDone: false,
          color: this.todoColor,
          importance: this.importance
      })
      this.val = ''
          this.updateNote()
          noteService.update(this.note)
          console.log(this.note);
          
      },

      todoStyle(idx) {        
          return {
            "background-color": this.todos[idx].color
          }
      },

      deleteTodo(idx) {
        this.todos = this.todos.splice((idx, 1))
        this.updateNote()
        noteService.update(this.note)
      },

      markTodoAsDone(idx) {
        this.todos[idx].isDone = !this.todos[idx].isDone
        this.updateNote()
        
      },
      ifDone(idx) {
         return (this.todos[idx].isDone === true) ? {done: true} : {undone: true}

      },

      updateNote() {
        this.note.info.todos = this.todos
      },

      setImportance(val, idx) {

        if (val === 1) this.todoColor = '#D35400' 
        if (val === 2) this.todoColor = '#F4D03F' 
        if (val === 3) this.todoColor = '#28B463' 
        if (val === 4) this.todoColor = '#F2F3F4' 
        this.todos[idx].importance = val


        if (idx || idx === 0) this.todos[idx].color = this.todoColor
        this.updateNote()
        noteService.update(this.note)
      },

      sort(sortBy) {
        
        if (sortBy === 'accending') this.todos.sort( (a,b) => {
          return a.importance - b.importance
        } )
        if (sortBy === 'decending') this.todos.sort((a,b) => {
          return b.importance - a.importance
        })
        console.log(this.todos);
      }

    },
    computed: {
      

      
    },

  };
  