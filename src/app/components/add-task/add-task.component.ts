import { Component,EventEmitter,Output } from '@angular/core';
import { Task } from 'src/app/Task';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from "rxjs";
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  @Output() onAddTask:EventEmitter<Task> = new EventEmitter();
  text: string;
  day: string;
  reminder: boolean = false;
  showAddTask:boolean;
  subscription:Subscription;

  constructor(private uiService:UiService){
    this.subscription = this.uiService.onToggle().subscribe(result=>{
      this.showAddTask = result;
    })
  }

  onSubmit(){
    if(!this.text){
      alert('please add a new task');
      return
    } else if(!this.day){
      alert('please add date and time')
      return
    }
    
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    };

    this.text ='';
    this.day= '';
    this.reminder = false;

    this.onAddTask.emit(newTask)
  }
    



  
}
