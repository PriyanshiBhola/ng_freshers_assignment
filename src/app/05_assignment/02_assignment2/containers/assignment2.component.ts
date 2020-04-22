import { Component,  ViewEncapsulation } from '@angular/core';
import { AssignmentComponent, Todo } from '../../assignment.component';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})
export class Assignment2Component {
  list : Todo[];
  constructor(private asgcomp : AssignmentComponent) { }


  createTableData(input : string) : HTMLTableDataCellElement{
    let cell = document.createElement('td');
    cell.textContent = input;
    return cell;
  }
  ngOnInit(){
    
     this.list = this.asgcomp.todos;
   
  }

  addClass(event){
    event.target.parentNode.className = "active";
  }
}