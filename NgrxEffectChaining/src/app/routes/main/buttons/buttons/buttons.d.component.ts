import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: 'buttons.d.component.html',
  styleUrls: ['buttons.d.component.css']
})
export class ButtonsComponent implements OnInit {

  @Input() isAuthenticated:boolean;
  @Input() adjectiveForJim:string;

  @Output() signInClick = new EventEmitter();
  @Output() signOutClick = new EventEmitter();
  @Output() signOutBadlyClick = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

}
