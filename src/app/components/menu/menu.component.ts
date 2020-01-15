import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'menu-app',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  @Output() private changeLang = new EventEmitter();

  constructor() {}
}
