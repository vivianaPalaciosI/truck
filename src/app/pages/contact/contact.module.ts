import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
// Components
import { ContactComponent } from './contact.component';
export const ROUTES: Routes = [

    { path: '', component: ContactComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(ROUTES),
        CommonModule,
        TranslateModule
    ],
    declarations: [
        ContactComponent
    ],
    exports: [
        ContactComponent,
    ],
    providers: [
    ]
})
export class ContactModule { }
