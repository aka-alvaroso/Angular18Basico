import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { task } from '../../models/task';

@Component({
  selector: 'app-create-task',
  standalone: true,
  imports: [],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.css'
})
export class CreateTaskComponent {
  @ViewChild("texto") el_texto: ElementRef | undefined;
  @Output() taskCreated = new EventEmitter<task>();

  createTask(){
    let title = this.el_texto?.nativeElement.value.trim();
    if(!title) return;
    let timestamp = Date.now();
    let newTask:task = {id:Math.random()*timestamp, title:title};
    this.taskCreated.emit(newTask);
    (this.el_texto?.nativeElement as any).value="";
    return false;
  }

}
