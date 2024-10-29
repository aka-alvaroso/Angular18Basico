import { Injectable } from '@angular/core';
import { task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class LocalDBService {

  /**
   * Devuelve el array de local storage a rray vacío si no existe
   * @returns el array de tareas
   */
  load ():task[]{
    let tasks = localStorage.getItem('tasks');
    if(tasks){
      return JSON.parse(tasks);
    }else{
      return [];
    }

  }

  /**
   * Método que guarda el array de tareas en local storage
   * @param tasks el array de tareas
   */
  save(tasks:task[]){
    localStorage.setItem('tasks', JSON.stringify(tasks))

  }

}
