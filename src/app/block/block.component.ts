import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss']
})
export class BlockComponent implements OnInit {
  nums = [];
  answer = [12, 19, 14, 21, 17, 5, 11, 22, 15];
  constructor() { }

  ngOnInit() {
  }

  onClick(num) {
    if (this.nums.length === 9) {
      return;
    }
    this.nums.push(num);
  }
  checkAnswer(num) {
    let color = 'black';
    const index = this.nums.findIndex(x => x === num);
    const rightIndex = this.answer.findIndex(x => x === num);
    console.log('index', index);
    console.log('rIndex', rightIndex);
    if (rightIndex === index) {
      color = 'green';
    } else {
      color = 'red';
    }
    return color;
  }

}
