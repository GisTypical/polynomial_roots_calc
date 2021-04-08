import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent implements OnInit {

  @Output() sendData = new EventEmitter<any>();
  data: string = "";
  constructor() {
  }

  ngOnInit(): void {
  }

  sendToParent(e: Event): void {
    e.preventDefault();
    this.sendData.emit(this.data);
  }

}