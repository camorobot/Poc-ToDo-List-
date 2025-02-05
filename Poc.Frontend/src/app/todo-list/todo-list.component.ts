import { Component } from '@angular/core';
import { TodoService } from '../todo.service'

@Component({
  selector: 'app-todo-list',
  imports: [],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  todos: string[] = [];
  newTodo: string = '';

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(): void{
    this.todoService.getTodos().subscribe((data) =>{
      this.todos = data;
    })
  }

  addTodo(): void {
    if (this.newTodo.trim()){
      this.todoService.addTodo(this.newTodo).subscribe(() =>{
        this.newTodo = '';
        this.getTodos();
      })
    }
  }
}
