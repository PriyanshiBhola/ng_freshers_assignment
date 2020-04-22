import { Component, ViewEncapsulation } from '@angular/core';

export interface Todo {
  id: string;
  type: string;
  description: string;
  completed: boolean;
}

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css'],
  //encapsulation: ViewEncapsulation.None
})
export class Assignment2Component {

  headers = ["id", "type", "description", "completed"];

  todos: Todo[] = [
    { id: 'TODO_1', type: 'Teach TypeScript', description: 'TypeScript is an awesome tech', completed: false },
    { id: 'TODO_2', type: 'Teach Angular', description: 'Angular is the future', completed: true },
    { id: 'TODO_3', type: 'Teach NodeJS', description: 'Much appreciated server-side tech', completed: true },
    { id: 'TODO_4', type: 'Teach JavaScript', description: 'A ubiquitous language in browser', completed: false }
  ];
  addClass(event){
    event.target.parentNode.className = "active";
  }
}