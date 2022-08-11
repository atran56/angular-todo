import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  inputTask:string = ""
  constructor() { }

//void means it returns nothing
  ngOnInit(): void {
    this.todos = [
      {
        content: 'first todo',
        completed: false
      },
      {
        content: 'second todo',
        completed: true
      },
      {
        content: 'third todo',
        completed: false
      }
    ]
  }

  completeTask(id:number) {
    this.todos.map((values,i) => {
      if (i == id) values.completed = !values.completed

      return values;
    })
  }

  deleteTask(id:number) {
    this.todos = this.todos.filter((values,i) => i !== id);
  }

  addTask() {
    this.todos.push({
      content: this.inputTask,
      completed: false
    }
    );
  }
}
