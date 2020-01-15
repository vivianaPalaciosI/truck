import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import {  RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
@NgModule({
    imports: [
      CommonModule,
      RouterModule,
      TranslateModule
    ],
    exports: [
      MenuComponent
    ],
    declarations: [
      MenuComponent
    ],
})

export class MenuModule { }
