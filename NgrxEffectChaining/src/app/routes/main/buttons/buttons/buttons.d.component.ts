import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: 'buttons.d.component.html',
  styleUrls: ['buttons.d.component.css']
})
export class ButtonsComponent implements OnInit {


  @Output() signInClick = new EventEmitter();
  @Output() signOutClick = new EventEmitter();


  // () closePopup = new EventEmitter();
  constructor() { }

  ngOnInit() {

  }

}
