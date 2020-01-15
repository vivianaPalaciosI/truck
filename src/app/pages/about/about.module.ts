import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
// Components
import { AboutComponent } from './about.component';
//service
import { AboutService } from '../../services'
export const ROUTES: Routes = [

    { path: '', component: AboutComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(ROUTES),
        CommonModule,
        TranslateModule
    ],
    declarations: [
        AboutComponent
    ],
    exports: [
        AboutComponent,
    ],
    providers: [
        AboutService
    ]
})
export class AboutModule { }
