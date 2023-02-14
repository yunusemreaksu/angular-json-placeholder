import { Component } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent {
  todos: Todo[] = [];
  show = false

  constructor(private todoService: TodoService) {}

  getTodos() {
    this.todoService.getTodos().subscribe((todos) => (this.todos = todos));
  }

  ngOnInit() {
    this.getTodos();
  }

  handleClick() {}
}
