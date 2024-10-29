import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input({required:true})
  text:string = 'Texto';
  @Input()
  color:string= '';

  @Output()
  presionar = new EventEmitter<any>();

  emitirvento(){
    this.presionar.emit("he hecho click");
  }

}
