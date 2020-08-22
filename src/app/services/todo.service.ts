import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map , catchError } from "rxjs/operators";

import { Todo } from '../models/Todo';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosUrl:string = 'http://localhost:4200';

  private todoList: Todo[] = [];
  jsonTodo : Todo[];
  private observableList: BehaviorSubject<Todo[]> = new BehaviorSubject([]);
 
  
  
 
  constructor(private http:HttpClient) { 
    
  }

  // Get Todos
  getTodos():Observable<Todo[]> {
    //return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);

    this.jsonTodo = JSON.parse(localStorage.getItem("TODOS"));
    if (this.jsonTodo == null) {
      this.jsonTodo = [];
      localStorage.setItem("TODOS",JSON.stringify(this.jsonTodo));
    }
    console.log(this.jsonTodo);
   return  of(this.jsonTodo);

    // return this.http
    // .get('http://localhost:4200' + '/todos')
    // .map(response => {
    //   const todos = this.todoList;
    //   return todos.map((todo) => new Todo(todo.id, todo.title, todo.completed));
    // })
  
  }

  // Delete Todo
  deleteTodo(todo:Todo):Observable<Todo> {
    this.jsonTodo = JSON.parse(localStorage.getItem("TODOS"));
    this.jsonTodo = this.jsonTodo.filter((item: Todo) => item.title !== todo.title);
    console.log(this.jsonTodo);
    localStorage.setItem("TODOS",JSON.stringify(this.jsonTodo));
    //location.reload();
    window.location.reload();
    return of(todo);
    // const url = `${this.todosUrl}/${todo.id}`;
    // return this.http.delete<Todo>(url, httpOptions);


    
  }

  // Add Todo
  addTodo(todo:Todo):Observable<Todo> {
    //return this.http.post<Todo>(this.todosUrl, todo, httpOptions);
    location.reload();
   if (localStorage == null){
    localStorage = new Storage();
   }
   this.jsonTodo.push(todo);
   localStorage.setItem("TODOS",JSON.stringify(this.jsonTodo));
    //localStorage.setItem("TODO"+ todo.title, JSON.strGETingify(todo));
   // this.observableList.next(this.todoList);
   console.log(this.jsonTodo);
    return of(todo);
    
    
  }

  // Toggle Completed
  toggleCompleted(todo: Todo):Observable<any> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.put(url, todo, httpOptions);

    
  }

  refreshData(){
    localStorage.setItem("TODOS",JSON.stringify([]));
    localStorage.setItem("splash",JSON.stringify([]));
    location.reload();
  }
}
