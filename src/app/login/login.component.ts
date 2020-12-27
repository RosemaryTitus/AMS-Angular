import { utf8Encode } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor() { }
  @Output() newItemEvent = new EventEmitter<string>();
  
login(l,p)
{
  this.newItemEvent.emit(l.value);
  console.log(l.value);
  console.log(p.value);
}
  ngOnInit(): void {
  }

}
