import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
// Components
import { HomeComponent } from './home.component';
// Services
import { ImageService } from '../../services';

export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(ROUTES),
        CommonModule,
        TranslateModule
    ],
    declarations: [
        HomeComponent
    ],
    exports: [
        HomeComponent,
    ],
    providers: [
        ImageService
    ]
})
export class HomeModule { }
