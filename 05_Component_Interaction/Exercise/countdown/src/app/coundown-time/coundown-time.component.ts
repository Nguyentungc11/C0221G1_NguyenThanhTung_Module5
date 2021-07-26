import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-coundown-time',
  templateUrl: './coundown-time.component.html',
  styleUrls: ['./coundown-time.component.css']
})
export class CoundownTimeComponent implements OnInit {
  @Output()
  finish = new EventEmitter<number>();
  start(){
    this.finish.emit(1);
  }
  stop(){
    this.finish.emit(2);
  }
  reset(){
    this.finish.emit(3);
  }

  ngOnInit() {

  }

}
