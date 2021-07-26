import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.flag = this.num;
  }

  title = 'countdown';
  seconds: number;
  isRun: number = 2;
  num: number = 10;
  interVal: number;
  flag: number;

  constructor() {

  }

  changeValue(value: number) {
    this.isRun = value;
    console.log(value);
    this.countDown();
  }

  countDown() {
    if (this.isRun === 1) {
      this.count();
      console.log("thành công")
    } else if (this.isRun === 2) {
      this.stop();
    } else {
      this.reset();
    }
  }

  reset() {
    this.num = this.flag;
    this.stop();
  }

  count() {
    this.interVal = setInterval(() => {
      this.setNum()
    }, 1000)
  }

  stop() {
    clearInterval(this.interVal)
  }

  setNum() {
    this.num = this.num - 1;
    if (this.num === 0) {
      this.stop()
    }
  }
  getNumber(value: number){
    this.num = value;
    this.flag = value;
    console.log(value);
  }
}
