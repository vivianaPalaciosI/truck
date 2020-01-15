import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private translate: TranslateService
  ) {
    this.changeLang('es');
  }

  changeLang(selectLang){
    this.translate.setDefaultLang(selectLang);
  }
}
