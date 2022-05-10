import { Component, OnInit } from '@angular/core';
import { todo } from '../todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos:todo[]=[];
  
  constructor() {
  }

  ngOnInit(): void {
  }

  addtask(tak:any){
    console.log(tak)
    let t1=new todo(tak,false)
  
    this.todos.push(t1)
  }
  delete(index:number){
    this.todos.splice(index,1);
    console.log(this.todos)
  }
  isupdate(index:number){
    this.todos[index].ismodify=true;
  }

  update(index:number,tak:any){
    this.todos[index].task=tak;
    this.todos[index].ismodify=false;
  }
  completed(index:number){
    this.todos[index].completed=true;
  }
}
