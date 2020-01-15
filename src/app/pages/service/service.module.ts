import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
// Components
import { ServiceComponent } from './service.component';
import { QuoteModule } from '../../components/modals/quotes/quote.module';
// Service
import { TruckService } from '../../services';
export const ROUTES: Routes = [

    { path: '', component: ServiceComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(ROUTES),
        CommonModule,
        TranslateModule,
        FormsModule, ReactiveFormsModule,
        QuoteModule
    ],
    declarations: [
        ServiceComponent
    ],
    exports: [
        ServiceComponent,
    ],
    providers: [
        TruckService
    ]
})
export class ServiceModule { }
