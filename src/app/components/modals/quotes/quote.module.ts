import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuoteComponent } from './quote.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
@NgModule({
    imports: [
      CommonModule,
      TranslateModule
    ],
    exports: [
      QuoteComponent
    ],
    declarations: [
      QuoteComponent
    ],
})

export class QuoteModule { }
